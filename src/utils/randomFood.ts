import type { Food } from "../types/food"

export function randomFood(foods: Food[]): Food {
  const randomIndex = Math.floor(Math.random() * foods.length)

  return foods[randomIndex]
}