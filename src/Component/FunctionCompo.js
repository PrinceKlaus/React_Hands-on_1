import React from 'react';
import '../App.css';
import './Hands.css'
function FunctionCompo(){
    return (
        <div className='one'>
        <h1 className='OneC'>This is created using Functional Component </h1>
        <p className='OneC'>This is done by External Css</p>
        <p style={{color:'blue',textAlign:'center'}}>This is done by Inline Css</p>
        </div>
    )
}
export default FunctionCompo