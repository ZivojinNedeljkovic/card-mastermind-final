import { ElementCreator } from '../../shared/elementCreator'
import { View } from '../../shared/view'
import { Spottable } from '../shared/gameViewInterfaces'

export class CardView extends View {
  private translateX = 0
  private translateY = 0
  private cardSpot: Spottable

  set zIndex(i: number) {
    this.element.style.zIndex = i.toString()
  }

  get zIndex() {
    return +this.element.style.zIndex
  }

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

  async move(cardSpot: Spottable, duration: number) {
    const zIndex = this.zIndex
    this.zIndex = 10000

    const { x: thisX, y: thisY } = this.coordinates
    const { x: cardSpotX, y: cardSpotY } = cardSpot.coordinates

    this.translateX += cardSpotX - thisX
    this.translateY += cardSpotY - thisY

    this.element.style.transition = `transform ${duration}ms`
    this.element.style.transform = `translate(${this.translateX}px, ${this.translateY}px)`

    this.cardSpot = cardSpot

    return new Promise(resolve =>
      setTimeout(() => {
        this.zIndex = zIndex
        resolve('')
      }, duration)
    )
  }

  updatePosition() {
    this.move(this.cardSpot, 0)
  }
}
