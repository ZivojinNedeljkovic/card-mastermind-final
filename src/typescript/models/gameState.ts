import { TableCardSpotModel } from './gameModelsTypes'

export type GameState = {
  winningCombination?: string[]
  attemptsMade: number
  gameOver: boolean
  madeAttempts: TableCardSpotModel[][]
  currentAttempt: TableCardSpotModel[]
}

export const gameState: GameState = {
  attemptsMade: 0,
  gameOver: false,
  madeAttempts: [],
  currentAttempt: [],
}
