import { ClickListener } from '../../shared/clickListener'

class MenuOpenClickListener extends ClickListener<() => void> {
  protected onClicked(): void {
    this._handler?.()
  }
}
const parent: HTMLElement =
  document.querySelector('.game__open-menu') ?? document.body
export default new MenuOpenClickListener(parent)
