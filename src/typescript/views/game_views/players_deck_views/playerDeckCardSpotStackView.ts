import { ElementCreator } from '../../shared/elementCreator'
import { View } from '../../shared/view'
import { CardView } from '../cards/cardView'
import { PlayerDeckCardSpotView } from './playerDeckCardSpotView'

export class PlayerDeckCardSpotStackView extends View {
  private cardSpots: PlayerDeckCardSpotView[] = []

  constructor(parentEl: HTMLElement, readonly cardType: string) {
    super(
      ElementCreator.createElement({
        tag: 'div',
        class: 'game__players-deck__card-spot-stack',
        dataSets: [{ key: 'cardType', value: cardType }],
        parentEl: parentEl,
      })
    )
  }

  push(card: CardView, animationDuration: number) {
    card.zIndex =  this.cardSpots.length
    this.cardSpots.push(
      new PlayerDeckCardSpotView({
        parentEl: this.element,
        spotIndex: this.cardSpots.length,
        card: card,
        animationDuration: animationDuration,
      })
    )
  }

  pop() {
    const cardSpot = this.cardSpots.pop()
    cardSpot?.removeCardSpotEl()
    return cardSpot?.card
  }

  get length() {
    return this.cardSpots.length
  }
}
