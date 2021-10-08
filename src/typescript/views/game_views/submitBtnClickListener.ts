import { ClickListener } from '../shared/clickListener'

class SubmitBtnClickListener extends ClickListener<() => void> {
  protected onClicked(): void {
    this._handler?.()
  }
}
const parent: HTMLElement =
  document.querySelector('.game__submit-btn') ?? document.body
export default new SubmitBtnClickListener(parent)
