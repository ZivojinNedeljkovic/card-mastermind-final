import { View } from '../../shared/view'
import { Spottable } from './gameViewInterfaces'

export abstract class SpotView extends View implements Spottable {
  get coordinates() {
    return this.element.getBoundingClientRect()
  }
}
