import { MoveResult } from '../../../shardTypes'
import { CardView } from '../cards/cardView'
import { MoveResultSpotView } from './moveResultSpotView'
import { TableCardSpotView } from './tableCardSpotView'

class TableView {
  private cardSpots: TableCardSpotView[] = []
  private moveResultSpots: MoveResultSpotView[] = []

  constructor(private element: HTMLElement) {}

  setNumberOfRows(num: number) {
    this.element.style.setProperty('--cards-spots-per-row', num.toString())
  }

  addCardAndReportSpots(numberOfCardSpots: number, cardsPerMove: number) {
    for (let i = 0; i < numberOfCardSpots; i++) {
      this.cardSpots.push(new TableCardSpotView(this.element, i))
      if ((i + 1) % cardsPerMove === 0) {
        this.moveResultSpots.push(new MoveResultSpotView(this.element))
      }
    }
  }

  // getCardSpot(cardSpotIndex: number) {
  //   if (cardSpotIndex >= this.cardSpots.length) return
  //   return this.cardSpots[cardSpotIndex]
  // }

  addCard(data: {
    cardSpotIndex: number
    card: CardView
    animationDuration: number
  }) {
    if (data.cardSpotIndex >= this.cardSpots.length) return
    data.card.zIndex = 100
    const cardSpot = this.cardSpots[data.cardSpotIndex]
    data.card.move(cardSpot, data.animationDuration)
  }

  renderMoveResult(moveResultSpotIndex: number, moveResult: MoveResult) {
    this.moveResultSpots[moveResultSpotIndex]?.renderResult(moveResult)
  }
}

const parent: HTMLElement =
  document.querySelector('.game__table') ?? document.body

export default new TableView(parent)
