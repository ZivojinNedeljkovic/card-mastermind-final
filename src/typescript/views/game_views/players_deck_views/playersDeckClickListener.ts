import { ClickListener } from '../../shared/clickListener'
import { PlayerDeckCardSpotStackView } from './playerDeckCardSpotStackView'
import playersDeckView from './playersDeckView'

type Handler = (cardSpotStack: PlayerDeckCardSpotStackView) => void

class PlayerDeckClickListener extends ClickListener<Handler> {
  private getCardSpotStackView(CardSpotStackEl: HTMLElement) {
    const cardType = CardSpotStackEl.dataset.cardType ?? ''
    return playersDeckView.getCardSpotStack(cardType)
  }

  protected onClicked() {
    const cardSpotStackEl = this.getClosestElement(
      '.game__players-deck__card-spot-stack'
    )
    if (!cardSpotStackEl) return

    const cardSpotStack = this.getCardSpotStackView(cardSpotStackEl)
    if (!cardSpotStack) return

    this._handler?.(cardSpotStack)
  }
}

const parent: HTMLElement =
  document.querySelector('.game__players-deck') ?? document.body
export default new PlayerDeckClickListener(parent)
