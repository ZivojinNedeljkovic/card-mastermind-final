import { View } from '../../shared/view'
import { CardView } from './cardView'

class CardsContainerView extends View {
  private _cardViews: CardView[] = []

  get cardViews(): readonly CardView[] {
    return this._cardViews
  }

  constructor(element: HTMLElement) {
    super(element)
    window.addEventListener('resize', this.updateCardsPositions.bind(this, 5))
    window.addEventListener('scroll', this.updateCardsPositions.bind(this, 5))
    //console.log(this._cardViews[0].updatePosition())
  }

  updateCardsPositions(repeat: number) {
    let counter = 0
    const interval = setInterval(() => {
      if (counter++ < repeat) clearInterval(interval)
      this._cardViews.forEach(card => card.updatePosition())
    }, counter * 100)
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
