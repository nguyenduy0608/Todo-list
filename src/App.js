import logo from './logo.svg';
import './App.css';
import { useReducer ,useRef} from 'react';

const  initState = {
  job : '',
  jobs :[],
  fix :''
}
const SET_JOB = 'setjob'
const ADD_JOB = 'addjob'
const DLT_JOB = 'deletejob'
const FIX_JOB = 'fixjob'
const SET_FIX = 'setfix'
const setJob = payload => {
  return {
    type : SET_JOB,
    payload
  }
}
const addJob = payload => {
  return {
    type : ADD_JOB,
    payload
  }
}
const dltJob = payload => {
  return {
    type : DLT_JOB,
    payload
  }
}
const fixJob = payload=>{
  return {
    type : FIX_JOB,
    payload
  }
} 
const setFix = Payload=>{
  return {
    type : SET_FIX,
    Payload
  }
} 
const reducer = (state,action) => {
  let newState
  switch(action.type){
    case SET_JOB : newState = {
      ...state,
      job : action.payload
    }
    break
    case ADD_JOB : newState = {
      ...state,
      jobs :[...state.jobs , action.payload] 
    }
    break
    case DLT_JOB :
      const newJobs = [...state.jobs]
      newJobs.splice(action.payload,1)
      newState = {
      ...state,
      jobs : newJobs
    }
    break
    case SET_FIX :
      newState = {
        ...state,
        fix : action.Payload
      }
      break
    case FIX_JOB :
      const  newjobs = [action.payload]
      newjobs.splice(action.payload,1,action.Payload)
      newState = {
        ...state,
        job :  newjobs
      }
      break
    default : throw new Error('INVALID ACTION')
  }
  return newState 
}
  
function App() {
  const [state,dispatch] = useReducer(reducer,initState)
  const InputRef = useRef()
  const inputRef = useRef()
  const {job, jobs,fix} = state
  return (
    <div className="App" > 
      <h1 style = {{
        color : 'blue' ,
        textAlign : 'center'
      }}> TO DO</h1>
      <div className='Todo-in'>
      <input className = 'Todo-input' value = {job} 
              ref = {InputRef}
              onChange = { e => {
              dispatch (setJob(e.target.value))
              }}
              placeholder = "nhap cong viec..."
      />
      
      <button className="Todo-add"
      onClick={ () =>{
        dispatch(addJob(job))
        dispatch(setJob(''))
        InputRef.current.focus()
      }}> ADD</button>
      </div>
      <div className='Todo-in'>
      <input  className = 'Todo-input' 
      ref = {inputRef}
      value = {fix}
      placeholder = "nhap cong viec can sua..."
      onChange = {
        ev => {dispatch(setFix(ev.target.value))}
      }
      />
      <button className="Todo-add"
      onClick={ () =>{
        dispatch(fixJob(fix))
        dispatch(setFix(''))
      }}> OK</button>
      </div>
      <div className='Todo-out' style = {{
        marginLeft : '400px',
        width : '690px'
      }}>
        <div> {jobs.map((job,index) => (
        <h3  key  = {index}> {job} 
        <div style = {{ float : 'right'}}>
          <button onClick={ () => 
        dispatch(dltJob(index))
        }> Delete</button>
        <button style = {{   
          marginLeft : '20px'  
        }} onClick={ () => {
          
          inputRef.current.focus()
        }}> FIX</button>
        </div>
        </h3>
      ))}</div>
      </div>
      

    </div>
  );
}

export default App;
