import { CARDS_PER_TRY, WINING_COMBINATION_LENGTH } from '../models/gameConfig'
import { examineCombination } from '../models/gameLogic'
import { gameState } from '../models/gameState'
import { SubmitBtnView } from '../views/game_views/table_views/submitBtnView'
import tableView from '../views/game_views/table_views/tableView'

function getCardsInCurrentAttempt() {
  return gameState.currentAttempt
    .filter(tableCardSpotModel => tableCardSpotModel.card)
    .map(tableCardSpotModel => tableCardSpotModel.card!.type)
}

function getMoveResult(comb: string[]) {
  return examineCombination(comb, gameState.winningCombination ?? [])
}

function updateStateToNewMove() {
  gameState.attemptsMade++
  gameState.currentAttempt.forEach(cardSpot => {
    cardSpot.card = undefined
    cardSpot.cardSpotIndex += CARDS_PER_TRY
  })
}

export function submitCombinationController(submitBtnView: SubmitBtnView) {
  submitBtnView.removeSubmitBtn()
  const cardsInCurrAttempt = getCardsInCurrentAttempt()
  if (cardsInCurrAttempt.length !== WINING_COMBINATION_LENGTH) return

  const moveResult = getMoveResult(cardsInCurrAttempt)

  tableView.renderMoveResult(gameState.attemptsMade, moveResult)

  updateStateToNewMove()
}
