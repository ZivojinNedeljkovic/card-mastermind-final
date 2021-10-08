// import { ClickListener } from '../../shared/clickListener'

// import { TableCardSpotView } from './tableCardSpotView'
// import tableView from './tableView'

// type Handler = (cardSpot: TableCardSpotView) => void

// class TableClickListener extends ClickListener<Handler> {
//   private getCardSpotView(CardSpotEl: HTMLElement) {
//     const cardSpotIndex = +(CardSpotEl.dataset.spotIndex ?? '-1')
//     return tableView.getCardSpot(cardSpotIndex)
//   }

//   protected onClicked() {
//     const cardSpotEl = this.getClosestElement('.game__table__card-spot')

//     if (!cardSpotEl) return

//     const cardSpotStack = this.getCardSpotView(cardSpotEl)
//     if (!cardSpotStack) return

//     this._handler?.(cardSpotStack)
//   }
// }

// const parent: HTMLElement =
//   document.querySelector('.game__table') ?? document.body
// export default new TableClickListener(parent)
