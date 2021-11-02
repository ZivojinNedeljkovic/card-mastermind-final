import {
  CARDS,
  CARDS_PER_TRY,
  WINING_COMBINATION_LENGTH,
} from '../../models/gameConfig'
import { generateWiningCombination } from '../../models/gameLogic'
import { gameState } from '../../models/gameState'

function initCurrMove() {
  for (let i = 0; i < CARDS_PER_TRY; i++) {
    gameState.currentAttempt.push({ card: undefined, cardSpotIndex: i })
  }
}

export function gameStateSetupController() {
  gameState.winningCombination = generateWiningCombination(
    [...CARDS.keys()],
    WINING_COMBINATION_LENGTH
  )

  console.log('Wining Combination: ', ...gameState.winningCombination)

  initCurrMove()
}
