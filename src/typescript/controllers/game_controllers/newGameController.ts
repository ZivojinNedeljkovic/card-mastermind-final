import { MOVE_CARD_ANIMATION_DURATION } from '../../models/gameConfig'
import { gameState } from '../../models/gameState'
import cardsContainerView from '../../views/game_views/cards/cardsContainerView'
import playersDeckView from '../../views/game_views/players_deck_views/playersDeckView'
import tableView from '../../views/game_views/table_views/tableView'
import { gameStateSetupController } from './gameStateSetupController'
import { withdrawCardFromTableController } from './withdrawCardFromTableController'

function returnCardsToPlayersDeck() {
  const getCardView = (cardId: number) => cardsContainerView.cardViews[cardId]

  gameState.currentAttempt.forEach(cardSpot => {
    if (!cardSpot.card) return
    const cardView = getCardView(cardSpot.card.id)
    withdrawCardFromTableController(cardView)
  })

  gameState.madeAttempts.forEach(attempt => {
    attempt.forEach(cardSpot => {
      const cardView = getCardView(cardSpot.card!.id)
      playersDeckView.addCard(cardView, MOVE_CARD_ANIMATION_DURATION)
    })
  })
}

function removeMoveResults() {
  for (let i = 0; i < gameState.attemptsMade; i++) {
    tableView.moveResultSpot[i].removeAllTokens()
  }
}

function resetState() {
  gameState.attemptsMade = 0
  gameState.gameOver = false
  gameState.madeAttempts = []
  gameState.currentAttempt = []
  gameStateSetupController()
}

export function newGameController() {
  returnCardsToPlayersDeck()
  removeMoveResults()
  resetState()
}
