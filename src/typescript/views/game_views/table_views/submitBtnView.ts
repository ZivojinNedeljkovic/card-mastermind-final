import { ElementCreator } from '../../shared/elementCreator'
import { View } from '../../shared/view'

export class SubmitBtnView extends View {
  constructor(element: HTMLElement) {
    const submitBtnClass = 'game__table__move-result-spot__submit-btn'
    super(
      element.classList.contains(submitBtnClass)
        ? element
        : ElementCreator.createElement({
            tag: 'button',
            class: submitBtnClass,
            parentEl: element,
            innerHTML: 'submit',
          })
    )
  }
  removeSubmitBtn() {
    this.element.remove()
  }
}
