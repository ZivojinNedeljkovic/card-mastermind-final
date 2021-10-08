import { CardView } from '../cards/cardView'
import { SpotView } from './spotView'

export class CardSpotView extends SpotView {
  private _card?: CardView

  get card() {
    return this._card
  }

  protected set card(card: CardView | undefined) {
    this._card = card
  }

  placeCard(card: CardView, animationDuration: number) {
    if (this._card) return

    card.move(this, animationDuration)
    this._card = card
  }
}
