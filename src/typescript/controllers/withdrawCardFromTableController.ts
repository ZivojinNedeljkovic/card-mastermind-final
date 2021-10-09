import { gameState } from '../models/gameState'
import { CardView } from '../views/game_views/cards/cardView'
import playersDeckView from '../views/game_views/players_deck_views/playersDeckView'
import { TableCardSpotView } from '../views/game_views/table_views/tableCardSpotView'

function getCardSpotModel(cardID: number) {
  return gameState.currentAttempt.find(
    cardSpotM => cardSpotM.card?.id === cardID
  )
}

export function withdrawCardFromTableController(cardView: CardView) {
  const cardSpotModel = getCardSpotModel(cardView.id)
  if (!cardSpotModel) return

  cardSpotModel.card = undefined

  playersDeckView.addCard(cardView, 1000)
}
