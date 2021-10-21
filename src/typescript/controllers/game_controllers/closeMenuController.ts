import menuView from '../../views/game_views/menu/menuView'

export function closeMenuController() {
  console.log('close')

  menuView.isVisible = false
}
