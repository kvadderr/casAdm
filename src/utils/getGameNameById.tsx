import { selectGamesList } from "../store/slices/gameSlice"
import { useAppSelector } from "../store/storeHooks"

export const getGameNameById = (id: string) => {
  const gameList = useAppSelector(selectGamesList);
  return gameList.find(game => game.id === id)?.name || "Игра не найдена"
}