import { gameState } from '../models/gameState'
import { PlayerDeckCardSpotStackView } from '../views/game_views/players_deck_views/playerDeckCardSpotStackView'
import tableView from '../views/game_views/table_views/tableView'

function getFreeCardSpotModel() {
  return gameState.currentAttempt.find(
    tableCardSpotModel => !tableCardSpotModel.card
  )
}

export function addCardToTableController(
  playerDeckCardSpotStack: PlayerDeckCardSpotStackView
) {
  console.log(gameState.currentAttempt)

  const cardSpotModel = getFreeCardSpotModel()
  if (!cardSpotModel) return

  const cardView = playerDeckCardSpotStack.pop()
  if (!cardView) return

  cardSpotModel.card = { type: cardView.cardType, id: cardView.id }

  tableView.addCard({
    card: cardView,
    cardSpotIndex: cardSpotModel.cardSpotIndex,
    animationDuration: 1000,
  })
}
