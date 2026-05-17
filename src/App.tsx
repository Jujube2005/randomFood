import { useState } from "react"
import { foods } from "./data/foods"
import { randomFood } from "./utils/randomFood"
import type { Food } from "./types/food"

function App() {
  const [selectedFood, setSelectedFood] = useState<Food | null>(null)

  const handleRandomFood = () => {
    const food = randomFood(foods)
    setSelectedFood(food)
  }

  return (
    <div className="min-h-screen bg-zinc-950 text-white flex flex-col items-center justify-center px-4">
      <h1 className="text-5xl font-bold mb-8">
        Random Food 🍜
      </h1>

      <button
        onClick={handleRandomFood}
        className="bg-red-500 hover:bg-red-600 transition px-8 py-4 rounded-2xl text-xl font-bold"
      >
        สุ่มอาหาร
      </button>

      {selectedFood && (
        <div className="mt-10 bg-zinc-900 p-8 rounded-3xl shadow-2xl text-center w-full max-w-md">
          <h2 className="text-3xl font-bold mb-4">
            {selectedFood.name}
          </h2>

          <div className="flex justify-center gap-2 flex-wrap">
            {selectedFood.spicy && (
              <span className="bg-red-500 px-3 py-1 rounded-full text-sm">
                🌶️ เผ็ด
              </span>
            )}

            {selectedFood.seafood && (
              <span className="bg-blue-500 px-3 py-1 rounded-full text-sm">
                🦐 ซีฟู้ด
              </span>
            )}

            {selectedFood.beef && (
              <span className="bg-orange-500 px-3 py-1 rounded-full text-sm">
                🥩 เนื้อ
              </span>
            )}

            {selectedFood.thai && (
              <span className="bg-green-500 px-3 py-1 rounded-full text-sm">
                🇹🇭 ไทย
              </span>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default App