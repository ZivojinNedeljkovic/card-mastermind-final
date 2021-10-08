import { Spottable } from '../game_views/shared/gameViewsInterfaces'
import { View } from './view'

export abstract class MovableView extends View {
  private translateX = 0
  private translateY = 0

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
}
