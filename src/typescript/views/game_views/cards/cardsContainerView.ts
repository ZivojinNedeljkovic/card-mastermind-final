import { View } from '../../shared/view'
import { CardView } from './cardView'

class CardsContainerView extends View {
  private _cardViews: CardView[] = []

  get cardViews(): readonly CardView[] {
    return this._cardViews
  }

  addCards(cards: ReadonlyMap<string, number>) {
    let id = 0
    cards.forEach((amount, cardType) => {
      //for (let i = 0; i < amount; i++)
      while (amount-- > 0)
        this._cardViews.push(new CardView(this.element, cardType, id++))
    })
  }
}

const parent: HTMLElement =
  document.querySelector('.game__cards-container') ?? document.body

export default new CardsContainerView(parent)
