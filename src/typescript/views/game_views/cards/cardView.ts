import { ElementCreator } from '../../shared/elementCreator'
import { View } from '../../shared/view'
import { Spottable } from '../shared/gameViewInterfaces'

export class CardView extends View {
  private translateX = 0
  private translateY = 0
  private cardSpot: Spottable
  private x = 0
  private y = 0

  private static cardsMovedCounter = 0

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
    this.setMyCoordinates()
  }

  private setMyCoordinates() {
    const { x, y } = this.element.getBoundingClientRect()
    this.x = x
    this.y = y
  }

  async move(data: {
    cardSpot: Spottable
    duration: number
    aboveMovingCards?: boolean
  }) {
    const { x: cardSpotX, y: cardSpotY } = data.cardSpot.coordinates

    this.translateX += cardSpotX - this.x
    this.translateY += cardSpotY - this.y

    this.x = cardSpotX
    this.y = cardSpotY

    this.element.style.transition = `transform ${data.duration}ms`
    this.element.style.transform = `translate(${this.translateX}px, ${this.translateY}px)`

    this.cardSpot = data.cardSpot

    if (data.aboveMovingCards === undefined) return

    const zIndex = this.zIndex
    this.zIndex = data.aboveMovingCards
      ? 1000 + CardView.cardsMovedCounter++
      : 1000 - CardView.cardsMovedCounter++

    return new Promise((resolve, _) =>
      setTimeout(() => {
        this.zIndex = zIndex
        resolve('card moved')
      }, data.duration)
    )
  }

  updatePosition() {
    this.setMyCoordinates()
    this.move({ cardSpot: this.cardSpot, duration: 0 })
  }
}
