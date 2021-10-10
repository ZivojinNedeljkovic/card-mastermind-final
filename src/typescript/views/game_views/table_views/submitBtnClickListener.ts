import { ClickListener } from '../../shared/clickListener'
import { SubmitBtnView } from './submitBtnView'

class SubmitBtnClickListener extends ClickListener<
  (submitBtnView: SubmitBtnView) => void
> {
  protected onClicked(): void {
    const submitBtnEl = this.getClosestElement(
      '.game__table__move-result-spot__submit-btn'
    )
    if (!submitBtnEl) return

    this._handler?.(new SubmitBtnView(submitBtnEl))
  }
}
const parent: HTMLElement =
  document.querySelector('.game__table') ?? document.body
export default new SubmitBtnClickListener(parent)
