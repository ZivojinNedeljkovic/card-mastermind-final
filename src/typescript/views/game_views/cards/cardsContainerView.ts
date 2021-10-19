import { View } from '../../shared/view'
import { CardView } from './cardView'

class CardsContainerView extends View {
  private _cardViews: CardView[] = []

  get cardViews(): readonly CardView[] {
    return this._cardViews
  }

  constructor(element: HTMLElement) {
    super(element)
    window.addEventListener('resize', this.updateCardsPositions.bind(this))
    window.addEventListener('scroll', this.updateCardsPositions.bind(this))
    // document.body.addEventListener(
    //   'click',
    //   this.updateCardsPositions.bind(this)
    // )
  }

  updateCardsPositions() {
    setTimeout(
      () => this._cardViews.forEach(card => card.updatePosition()),
      100
    )
    setTimeout(
      () => this._cardViews.forEach(card => card.updatePosition()),
      200
    )
  }

  addCards(cards: ReadonlyMap<string, number>) {
    let id = 0
    cards.forEach((amount, cardType) => {
      while (amount-- > 0)
        this._cardViews.push(new CardView(this.element, cardType, id++))
    })
  }
}

const parent: HTMLElement =
  document.querySelector('.game__cards-container') ?? document.body

export default new CardsContainerView(parent)
