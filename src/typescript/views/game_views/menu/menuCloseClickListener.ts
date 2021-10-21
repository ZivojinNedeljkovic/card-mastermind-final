import { ClickListener } from '../../shared/clickListener'

class MenuCloseClickListener extends ClickListener<() => void> {
  protected onClicked(): void {
    if (!this.getClosestElement('.game__menu__modal__content__close')) return
    this._handler?.()
  }
}
const parent: HTMLElement =
  document.querySelector('.game__menu__modal') ?? document.body
export default new MenuCloseClickListener(parent)
