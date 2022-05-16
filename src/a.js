import logo from './logo.svg';
import { useReducer} from 'react';
const initState = 0
const UP_ACTION = 'up'
const DOWN_ACTION = 'down'
const reducer = (state ,action) => {
  switch (action) {
    case UP_ACTION: return state + 1
    case DOWN_ACTION : return state - 1
    default : throw new Error ('INVALID ACTION')
  }
}
function App() {
  const [count, dispatch] = useReducer(reducer,initState)
  return (
    <div className="App">
      <h1> {count}</h1>
      <button onClick={ ()=>
        dispatch(DOWN_ACTION)
      }> Down</button>

      <button onClick={ ()=>
        dispatch(UP_ACTION)
      }>Up</button>

    </div>
  );
}

export default a;