import './App.css';
import { Countval } from './components/counterapp';
import NavBar from './navbar';
import React, { useReducer } from 'react';
import { FaRedoAlt, FaRecycle } from 'react-icons/fa';


function Setrefresh() {
  window.location.reload();
}


export default function App() {

  const initialstate = [
    { id: 0, value: 0 },
    { id: 1, value: 0 },
    { id: 2, value: 0 },
    { id: 3, value: 0 },
  ];

  const reducer = (state, { type, id }) => {
    switch (type) {
      case 'increment':
        return state.map(row => {
          return row.id === id ? { ...row, value: row.value + 1 } : row
        })
      case 'decrement':
        return state.map(row => {
          return row.id === id ? { ...row, value: row.value - 1 } : row
        })
      case 'reset':
        return state.map(row => {
          return { ...row, value: 0 }
        })
      case 'remove':
        return state.filter(row => row.id !== id)
      default:
        return state


    }
  }

  const [count, dispatch] = useReducer(reducer, initialstate);



  return (
    <div className='main_wrap'>

      <div className='container'>

        <div className='card--body'>
          {<NavBar totalCounters={count.filter((c) => c.value > 0).length} />}
          <div className='main'>
            <div className='row'>
              <div className=" refresh">
                <button className="btn btn-success m-2"
                  onClick={() => dispatch({
                    type: 'reset'
                  })}> <FaRedoAlt /></button>
                <button
                  className="btn btn-primary"
                  onClick={Setrefresh}
                >
                  <FaRecycle />
                </button>
              </div>
            </div>

            {
              count.map(({ id }, i) => {
                return <div key={i}>

                  <Countval id={id} dispatch={dispatch} count={count[i]?.value}></Countval></div >
              })
            }
          </div>
        </div>
      </div>


    </div>
  )
}
