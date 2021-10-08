import { MoveResult } from '../shardTypes'

/** Throws error if min is greater then max */
function getRandomIntInclusive(min: number, max: number) {
  if (min > max) throw new Error('Invalid interval')

  min = Math.ceil(min)
  max = Math.floor(max)

  return Math.floor(Math.random() * (max - min + 1) + min)
}

/** Returns undefined if array is empty */
const getRandomElementFromArray = <T>(array: T[]) => {
  if (array.length === 0) return undefined

  return array[getRandomIntInclusive(0, array.length - 1)]
}

export function generateWiningCombination(cards: string[], winCombLen: number) {
  if (!cards.length) return []
  const winComb: string[] = []

  while (winCombLen-- > 0) {
    winComb.push(getRandomElementFromArray(cards)!)
  }

  return winComb
}

function markEqualElementsInSamePlaceInArrays<T>(
  arr1: T[],
  arr1Mark: T,
  arr2: T[],
  arr2Mark: T
) {
  arr1 = [...arr1]
  arr2 = [...arr2]

  for (let i = 0; i < Math.min(arr1.length, arr2.length); i++) {
    if (arr1[i] !== arr2[i]) continue
    arr1[i] = arr1Mark
    arr2[i] = arr2Mark
  }

  return { arr1, arr2 }
}

function getNumOfEqualElementsInArrays<T>(arr1: T[], arr2: T[]) {
  arr1 = [...arr1]
  arr2 = [...arr2]

  let numberOfEqualElements = 0

  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] !== arr2[j]) continue

      arr1.splice(i--, 1)
      arr2.splice(j--, 1)

      numberOfEqualElements++
    }
  }

  return numberOfEqualElements
}

export function examineCombination(
  comb: string[],
  winComb: string[]
): MoveResult {
  const { arr1: combMarked, arr2: winCombMarked } =
    markEqualElementsInSamePlaceInArrays(comb, 'm1', winComb, 'm2')

  return {
    numOfRightCardsInRightPlaces: combMarked.filter(el => el === 'm1').length,
    numOfRightCardsInWrongPlaces: getNumOfEqualElementsInArrays(
      combMarked,
      winCombMarked
    ),
  }
}
