import {
  CARDS_PER_TRY,
  MOVE_CARD_ANIMATION_DURATION,
} from '../models/gameConfig'
import { getNumberOfCards } from '../models/gameLogic'
import { gameState } from '../models/gameState'
import { CardView } from '../views/game_views/cards/cardView'
import playersDeckView from '../views/game_views/players_deck_views/playersDeckView'
import tableView from '../views/game_views/table_views/tableView'

function getCardSpotModel(cardID: number) {
  return gameState.currentAttempt.find(
    cardSpotM => cardSpotM.card?.id === cardID
  )
}

export function withdrawCardFromTableController(cardView: CardView) {
  if (getNumberOfCards(gameState.currentAttempt) === CARDS_PER_TRY) {
    tableView.moveResultSpot[gameState.attemptsMade].removeSubmitBtn()
  }
  const cardSpotModel = getCardSpotModel(cardView.id)
  if (!cardSpotModel) return

  cardSpotModel.card = undefined

  playersDeckView.addCard(cardView, MOVE_CARD_ANIMATION_DURATION)
}
