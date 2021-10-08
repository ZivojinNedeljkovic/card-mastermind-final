import {
  CARDS,
  CARDS_PER_TRY,
  NUMBER_OF_TRIES,
  WINING_COMBINATION_LENGTH,
} from '../models/gameConfig'
import { gameState } from '../models/gameState'
import tableView from '../views/game_views/table_views/tableView'
import playersDeckView from '../views/game_views/players_deck_views/playersDeckView'
import cardsContainerView from '../views/game_views/cards/cardsContainerView'
import playersDeckClickListener from '../views/game_views/players_deck_views/playersDeckClickListener'
import { addCardToTableController } from './addCardToTableController'
import tableClickListener from '../views/game_views/table_views/tableClickListener'
import { withdrawCardFromTableController } from './withdrawCardFromTableController'
import submitBtnClickListener from '../views/game_views/submitBtnClickListener'
import { submitCombinationController } from './submitCombController'
import { generateWiningCombination } from '../models/gameLogic'
import cardContainerClickListener from '../views/game_views/cards/cardContainerClickListener'

function createTable() {
  tableView.setNumberOfRows(CARDS_PER_TRY)
  tableView.addCardAndReportSpots(
    CARDS_PER_TRY * NUMBER_OF_TRIES,
    CARDS_PER_TRY
  )
}

function createPlayersDeck() {
  playersDeckView.addCardStacks([...CARDS.keys()])
}

function addCards() {
  cardsContainerView.addCards(CARDS)
}

function dealCards() {
  cardsContainerView.cardViews.forEach(cardView =>
    playersDeckView.addCard(cardView, 0)
  )
}

function initCurrMove() {
  for (let i = 0; i < CARDS_PER_TRY; i++) {
    gameState.currentAttempt.push({ card: undefined, cardSpotIndex: i })
  }
}

export function loadGame() {
  gameState.winningCombination = generateWiningCombination(
    [...CARDS.keys()],
    WINING_COMBINATION_LENGTH
  )
  console.log(gameState.winningCombination)

  initCurrMove()

  createTable()
  createPlayersDeck()
  addCards()

  dealCards()

  playersDeckClickListener.handler = addCardToTableController
  cardContainerClickListener.handler = withdrawCardFromTableController

  submitBtnClickListener.handler = submitCombinationController
}