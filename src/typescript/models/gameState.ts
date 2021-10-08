import { TableCardSpotModel } from './gameModelsTypes'

export type GameState = {
  winningCombination?: string[]
  attemptsMade: number
  gameOver: boolean
  currentAttempt: TableCardSpotModel[]
  cardsInCurrentMove: number
}

export const gameState: GameState = {
  attemptsMade: 0,
  gameOver: false,
  currentAttempt: [],
  cardsInCurrentMove: 0,
}
