import { View } from '../../shared/view'

class MenuView extends View {
  set isVisible(bool: boolean) {
    this.element.style.display = bool ? 'flex' : 'none'
  }
}

const parent: HTMLElement =
  document.querySelector('.game__menu__modal') ?? document.body

export default new MenuView(parent)
