import { CARDS, CARDS_PER_TRY, NUMBER_OF_TRIES } from '../../models/gameConfig'
import tableView from '../../views/game_views/table_views/tableView'
import playersDeckView from '../../views/game_views/players_deck_views/playersDeckView'
import cardsContainerView from '../../views/game_views/cards/cardsContainerView'
import playersDeckClickListener from '../../views/game_views/players_deck_views/playersDeckClickListener'
import { addCardToTableController } from './addCardToTableController'
import { withdrawCardFromTableController } from './withdrawCardFromTableController'

import { submitCombinationController } from './submitCombController'
import cardContainerClickListener from '../../views/game_views/cards/cardContainerClickListener'
import submitBtnClickListener from '../../views/game_views/table_views/submitBtnClickListener'
import refreshIconClickListener from '../../views/game_views/icons/refreshIconClickListener'
import { newGameController } from './newGameController'
import { gameStateSetupController } from './gameStateSetupController'

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

function cardsWontDealBugfix() {
  cardsContainerView.updateCardsPositions()
}

export function loadGame() {
  gameStateSetupController()

  createTable()
  createPlayersDeck()
  addCards()

  dealCards()
  cardsWontDealBugfix()

  playersDeckClickListener.handler = addCardToTableController
  cardContainerClickListener.handler = withdrawCardFromTableController
  submitBtnClickListener.handler = submitCombinationController
  refreshIconClickListener.handler = newGameController
}
