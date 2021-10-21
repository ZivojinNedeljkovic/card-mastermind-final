import {
  CARDS_PER_TRY,
  MOVE_CARD_ANIMATION_DURATION,
} from '../../models/gameConfig'
import { getNumberOfCards } from '../../models/gameLogic'
import { gameState } from '../../models/gameState'
import { PlayerDeckCardSpotStackView } from '../../views/game_views/players_deck_views/playerDeckCardSpotStackView'
import tableView from '../../views/game_views/table_views/tableView'

function getFreeCardSpotModel() {
  return gameState.currentAttempt.find(
    tableCardSpotModel => !tableCardSpotModel.card
  )
}

const isLastCardInMove = () =>
  getNumberOfCards(gameState.currentAttempt) === CARDS_PER_TRY

export async function addCardToTableController(
  playerDeckCardSpotStack: PlayerDeckCardSpotStackView
) {
  const cardSpotModel = getFreeCardSpotModel()
  if (!cardSpotModel) return

  const cardView = playerDeckCardSpotStack.pop()
  if (!cardView) return

  cardSpotModel.card = { type: cardView.cardType, id: cardView.id }

  // const cardWasLast = isLastCardInMove()
  // await tableView.addCard({
  //   card: cardView,
  //   cardSpotIndex: cardSpotModel.cardSpotIndex,
  //   animationDuration: MOVE_CARD_ANIMATION_DURATION,
  // })

  // if (!(cardWasLast && isLastCardInMove())) return
  // tableView.moveResultSpot[gameState.attemptsMade].renderSubmitButton()

  tableView.addCard({
    card: cardView,
    cardSpotIndex: cardSpotModel.cardSpotIndex,
    animationDuration: MOVE_CARD_ANIMATION_DURATION,
  })

  if (!isLastCardInMove()) return
  tableView.moveResultSpot[gameState.attemptsMade].renderSubmitButton()
}
