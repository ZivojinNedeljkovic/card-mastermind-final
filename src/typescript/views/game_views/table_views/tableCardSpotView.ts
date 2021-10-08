import { ElementCreator } from '../../shared/elementCreator'
import { SpotView } from '../shared/spotView'

export class TableCardSpotView extends SpotView {
  constructor(parentEl: HTMLElement, readonly spotIndex: number) {
    super(
      ElementCreator.createElement({
        tag: 'div',
        class: 'game__table__card-spot',
        dataSets: [{ key: 'spotIndex', value: spotIndex.toString() }],
        parentEl: parentEl,
      })
    )
  }

  // withdrawCard() {
  //   const card = this.card
  //   this.card = undefined
  //   return card
  // }
}
