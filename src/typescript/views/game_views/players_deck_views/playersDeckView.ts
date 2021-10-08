import { View } from '../../shared/view'
import { CardView } from '../cards/cardView'
import { PlayerDeckCardSpotStackView } from './playerDeckCardSpotStackView'

class PlayersDeckView extends View {
  private cardSpotStacks: Map<string, PlayerDeckCardSpotStackView> = new Map()

  addCardStacks(cardTypes: string[]) {
    cardTypes.forEach(cardType => {
      this.cardSpotStacks.set(
        cardType,
        new PlayerDeckCardSpotStackView(this.element, cardType)
      )
    })
  }

  getCardSpotStack(cardType: string) {
    return this.cardSpotStacks.get(cardType)
  }

  addCard(card: CardView, animationDuration: number) {
    const cardStack = this.getCardSpotStack(card.cardType)
    if (!cardStack) return
    cardStack.push(card, animationDuration)
  }
}

const parent: HTMLElement =
  document.querySelector('.game__players-deck') ?? document.body
export default new PlayersDeckView(parent)
