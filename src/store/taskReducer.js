import { taskUpdated, taskDeleted } from './actionTypes'

export function taskReducer(state = [], action) {
  switch (action.type) {
    case taskUpdated: {
      const newArr = [...state]
      const elementIndex = newArr.findIndex((el) => el.id === action.payload.id)
      newArr[elementIndex] = { ...newArr[elementIndex], ...action.payload }
      return newArr
    }
    case taskDeleted: {
      return state.filter((t) => t.id !== action.payload.id)
    }

    default:
      return state
  }
}
