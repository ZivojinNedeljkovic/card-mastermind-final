import { TableCardSpotView } from './tableCardSpotView'

class TableCardSpotsView {
  private cardSpots: TableCardSpotView[] = []

  constructor(private element: HTMLElement) {}

  addCardSpots(numberOfCardSpots: number) {
    for (let i = 0; i < numberOfCardSpots; i++) {
      this.cardSpots.push(new TableCardSpotView(this.element, i))
    }
  }

  getCardSpot(cardSpotIndex: number) {
    if (cardSpotIndex >= this.cardSpots.length) return
    return this.cardSpots[cardSpotIndex]
  }
}

const parent: HTMLElement =
  document.querySelector('.game__table') ?? document.body

export default new TableCardSpotsView(parent)
