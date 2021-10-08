import { ElementCreator } from '../../shared/elementCreator'
import { CardView } from '../cards/cardView'
import { CardSpotView } from '../shared/cardSpotView'

export class PlayerDeckCardSpotView extends CardSpotView {
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

  removeCardSpotEl() {
    this.element.remove()
  }
}
