import { ClickListener } from '../../shared/clickListener'

class RefreshIconClickListener extends ClickListener<() => void> {
  protected onClicked() {
    this._handler?.()
  }
}

const parent: HTMLElement =
  document.querySelector('.game__refresh-icon') ?? document.body
export default new RefreshIconClickListener(parent)
