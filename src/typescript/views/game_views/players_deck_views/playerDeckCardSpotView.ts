import { ElementCreator } from '../../shared/elementCreator'
import { View } from '../../shared/view'
import { CardView } from '../cards/cardView'
import { Spottable } from '../shared/gameViewInterfaces'

export class PlayerDeckCardSpotView extends View implements Spottable{
  constructor(data: {
    parentEl: HTMLElement
    spotIndex: number
    card: CardView
    animationDuration: number
  }) {
    super(
      ElementCreator.createElement({
        tag: 'div',
        class: `game__players-deck__card-spot-stack__card-spot--${data.spotIndex}`,
        parentEl: data.parentEl,
      })
    )
    this.placeCard(data.card, data.animationDuration)
  }
  private _card?: CardView

  get card() {
    return this._card
  }
  get coordinates() {
    return this.element.getBoundingClientRect()
  }

  protected set card(card: CardView | undefined) {
    this._card = card
  }
  removeCardSpotEl() {
    this.element.remove()
  }
  placeCard(card: CardView, animationDuration: number) {
    if (this._card) return

    card.move(this, animationDuration)
    this._card = card
  }
}
