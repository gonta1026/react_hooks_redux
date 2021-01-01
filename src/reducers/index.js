const events = (state = [], action) => {
  switch(action.type) {
      case "CREATE_EVENT":
          const event = {title: action.event.title, body: action.event.body}
          const length = state.length
          const id = length === 0 ? 1 : state[length - 1].id + 1
          return [...state, {id, ...event}]
      case "DELETE_EVENT":
          console.log(action)
          const newState = state.filter((event) => event.id !== action.id);
          return newState;
      case "DELETE_ALL_EVENT":
          return []
      default:
         return state
  }
}

export default events