import { type } from '@testing-library/user-event/dist/type';
import React, { useState } from 'react';
import { FaPlusCircle, FaTrash, FaMinusCircle, FaRedoAlt, FaRecycle } from 'react-icons/fa';



export function Countval({id,dispatch,count}) {

   let backgroundColor= count===0? '#ffc107':'#478ff9'
   
    return (
          
    <div>
                <span  className='value'>
                <span className='badge m-2 ' style={{backgroundColor}}> {count === 0 ? "Zero" : count}</span>
                </span>


                <button
                    className="btn btn-secondary"
                    onClick={() => dispatch({ type: "increment", id: Number(id) })}
                >
                    <FaPlusCircle />
                </button>
                <button
                    className="btn btn-info m-2"
                    onClick={() => dispatch({type:'decrement',id:Number(id)})}
                    disabled={count === 0 ? "disabled" : ""}

                >
                    <FaMinusCircle />
                </button>
                <button
                    className="btn btn-danger"
                    onClick={() => dispatch({type:'remove',id:Number(id)})}
                >
                    <FaTrash />

                </button>
            </div>
       
    )
}
