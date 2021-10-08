import { ElementCreator } from '../../shared/elementCreator'
import { View } from '../../shared/view'
import { Spottable } from '../shared/gameViewsInterfaces'

export class CardView extends View {
  private translateX = 0
  private translateY = 0

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

  private get coordinates(): { x: number; y: number } {
    return this.element.getBoundingClientRect()
  }

  move(cardSpot: Spottable, duration: number) {
    const { x: thisX, y: thisY } = this.coordinates
    const { x: cardSpotX, y: cardSpotY } = cardSpot.coordinates

    this.translateX += cardSpotX - thisX
    this.translateY += cardSpotY - thisY

    this.element.style.transition = `transform ${duration}ms`
    this.element.style.transform = `translate(${this.translateX}px, ${this.translateY}px)`
  }

  set zIndex(i: number) {
    this.element.style.zIndex = i.toString()
  }
}
