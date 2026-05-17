import type { Food } from "../types/food"

export const foods: Food[] = [
  {
    id: 1,
    name: "กะเพราเนื้อไข่ดาว",
    spicy: true,
    seafood: false,
    beef: true,
    pork: false,
    thai: true,
  },
  {
    id: 2,
    name: "ต้มยำทะเล",
    spicy: true,
    seafood: true,
    beef: false,
    pork: false,
    thai: true,
  },
  {
    id: 3,
    name: "ยำแซลมอน",
    spicy: true,
    seafood: true,
    beef: false,
    pork: false,
    thai: false,
  },
  {
    id: 4,
    name: "เนื้อย่างจิ้มแจ่ว",
    spicy: true,
    seafood: false,
    beef: true,
    pork: false,
    thai: true,
  },
]