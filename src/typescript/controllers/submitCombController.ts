import { CARDS_PER_TRY } from '../models/gameConfig'
import { examineCombination } from '../models/gameLogic'
import { gameState } from '../models/gameState'
import tableView from '../views/game_views/table_views/tableView'

export function submitCombinationController() {
  const moveResult = examineCombination(
    gameState.currentAttempt.map(el => el.card?.type ?? ''),
    gameState.winningCombination ?? []
  )

  tableView.renderMoveResult(gameState.attemptsMade++, moveResult)

  gameState.currentAttempt.forEach(cardSpot => {
    cardSpot.card = undefined
    cardSpot.cardSpotIndex += CARDS_PER_TRY
  })
}
