import { MoveResult } from '../../../shardTypes'
import { View } from '../../shared/view'
import { CardView } from '../cards/cardView'
import { MoveResultSpotView } from './moveResultSpotView'
import { TableCardSpotView } from './tableCardSpotView'

class TableView extends View {
  private cardSpots: TableCardSpotView[] = []
  private _moveResultSpots: MoveResultSpotView[] = []

  get moveResultSpot(): readonly MoveResultSpotView[] {
    return this._moveResultSpots
  }

  setNumberOfRows(num: number) {
    this.element.style.setProperty('--cards-spots-per-row', num.toString())
  }

  addCardAndReportSpots(numberOfCardSpots: number, cardsPerMove: number) {
    for (let i = 0; i < numberOfCardSpots; i++) {
      this.cardSpots.push(new TableCardSpotView(this.element, i))
      if ((i + 1) % cardsPerMove === 0) {
        this._moveResultSpots.push(new MoveResultSpotView(this.element))
      }
    }
  }

  async addCard(data: {
    cardSpotIndex: number
    card: CardView
    animationDuration: number
  }) {
    if (data.cardSpotIndex >= this.cardSpots.length) return

    const cardSpot = this.cardSpots[data.cardSpotIndex]

    await data.card.move({
      cardSpot: cardSpot,
      duration: data.animationDuration,
      aboveMovingCards: false,
    })
  }

  renderMoveResult(moveResultSpotIndex: number, moveResult: MoveResult) {
    this._moveResultSpots[moveResultSpotIndex]?.renderResult(moveResult)
  }
}

const parent: HTMLElement =
  document.querySelector('.game__table') ?? document.body

export default new TableView(parent)
