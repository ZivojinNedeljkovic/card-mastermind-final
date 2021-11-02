import { MoveResult } from '../../../shardTypes'
import { ElementCreator } from '../../shared/elementCreator'
import { SpotView } from '../shared/spotView'
import { SubmitBtnView } from './submitBtnView'

export class MoveResultSpotView extends SpotView {
  private submitBtn?: SubmitBtnView

  constructor(parentEl: HTMLElement) {
    super(
      ElementCreator.createElement({
        tag: 'div',
        parentEl: parentEl,
        class: 'game__table__move-result-spot',
      })
    )
  }

  private renderAllCardsWrongToken() {
    ElementCreator.createElement({
      tag: 'div',
      class: 'game__table__move-result-spot__all-cards-wrong-token',
      parentEl: this.element,
      innerHTML: 'no hits',
    })
  }

  private renderRightCardInRightPlaceToken() {
    ElementCreator.createElement({
      tag: 'div',
      class: 'game__table__move-result-spot__right-card-in-right-place-token',
      parentEl: this.element,
    })
  }

  private renderRightCardInWrongPlaceToken() {
    ElementCreator.createElement({
      tag: 'div',
      class: 'game__table__move-result-spot__right-card-in-wrong-place-token',
      parentEl: this.element,
    })
  }

  renderResult(moveResult: MoveResult) {
    if (
      moveResult.numOfRightCardsInRightPlaces === 0 &&
      moveResult.numOfRightCardsInWrongPlaces === 0
    ) {
      this.renderAllCardsWrongToken()
      return
    }

    for (let i = 0; i < moveResult.numOfRightCardsInRightPlaces; i++) {
      this.renderRightCardInRightPlaceToken()
    }
    for (let i = 0; i < moveResult.numOfRightCardsInWrongPlaces; i++) {
      this.renderRightCardInWrongPlaceToken()
    }
  }

  renderSubmitButton() {
    if (this.submitBtn) return
    this.submitBtn = new SubmitBtnView(this.element)
  }

  removeSubmitBtn() {
    this.submitBtn?.removeSubmitBtn()
    this.submitBtn = undefined
  }

  removeAllTokens() {
    this.element.innerHTML = ''
    this.submitBtn = undefined
  }
}
