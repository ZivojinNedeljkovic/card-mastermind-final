import { ElementCreator } from '../../shared/elementCreator'
import { View } from '../../shared/view'

export class SubmitBtnView extends View {
  removeSubmitBtn() {
    this.element.remove()
  }
}
