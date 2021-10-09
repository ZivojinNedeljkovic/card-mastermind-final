import { ElementCreator } from '../../shared/elementCreator'
import { MovableView } from '../../shared/movableView'
import { View } from '../../shared/view'
import { Spottable } from '../shared/gameViewInterfaces'

export class CardView extends MovableView {
  constructor(
    parentEl: HTMLElement,
    readonly cardType: string,
    readonly id: number
  ) {
    super(
      ElementCreator.createElement({
        tag: 'div',
        class: `game__cards-container__card game__cards-container__card--${cardType}`,
        parentEl: parentEl,
        innerHTML: `<p>${cardType}</p>`,
        dataSets: [{ key: 'id', value: `${id}` }],
      })
    )
  }

  set zIndex(i: number) {
    this.element.style.zIndex = i.toString()
  }
}
