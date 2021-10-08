import { ClickListener } from '../../shared/clickListener'
import cardsContainerView from './cardsContainerView'
import { CardView } from './cardView'

class CardContainerClickListener extends ClickListener<
  (card: CardView) => void
> {
  private getCardView(cardEl: HTMLElement) {
    const cardSpotIndex = +(cardEl.dataset.id ?? '-1')
    return cardsContainerView.cardViews[cardSpotIndex]
  }

  protected onClicked(): void {
    const cardEl = this.getClosestElement('.game__cards-container__card')
    if (!cardEl) return

    const cardView = this.getCardView(cardEl)
    if (!cardView) return

    this._handler?.(cardView)
  }
}

const parent: HTMLElement =
  document.querySelector('.game__cards-container') ?? document.body

export default new CardContainerClickListener(parent)
