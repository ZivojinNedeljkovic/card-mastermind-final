import { CARDS_PER_TRY } from '../models/gameConfig'
import { getNumberOfCards } from '../models/gameLogic'
import { gameState } from '../models/gameState'
import { PlayerDeckCardSpotStackView } from '../views/game_views/players_deck_views/playerDeckCardSpotStackView'
import tableView from '../views/game_views/table_views/tableView'

function getFreeCardSpotModel() {
  return gameState.currentAttempt.find(
    tableCardSpotModel => !tableCardSpotModel.card
  )
}

function renderSubmitBtn() {}

export function addCardToTableController(
  playerDeckCardSpotStack: PlayerDeckCardSpotStackView
) {
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

  if (getNumberOfCards(gameState.currentAttempt) === CARDS_PER_TRY)
    setTimeout(
      () =>
        tableView.moveResultSpot[gameState.attemptsMade].renderSubmitButton(),
      1200
    )
}
