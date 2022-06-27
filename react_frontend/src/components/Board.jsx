import React, { Component } from 'react';
import '../css/components.css';

function Board(props) {
    if (props.data==null) {
      return (<h1>welcome</h1>);
    }
    const data = props.data
    const name = props.name
    if(data !== null && data.length){
      return (
        <div className='ex1'>
          <h2 className='text-center'>{name} Score History</h2>
          <div className='row'>
            <table className='table table-black table-sm table-hover'>
              <thead>
                <tr>
                  <th>calculator left</th>
                  <th>calculator right</th>
                  <th >result</th>
                  <th>correct result</th>
                </tr>
              </thead>
              <tbody>
                {
                  data.map(
                    row =>
                    <tr key={row.id}>
                      <td >{row.leftCalculator}</td>
                      <td >{row.rightCalculator}</td>
                      <td style={row.leftCalculator*row.rightCalculator!==row.result ? {color:'red'} : {}}>{row.result}</td>
                      <td >{row.leftCalculator*row.rightCalculator!==row.result ? row.leftCalculator*row.rightCalculator:null}</td>
                    </tr>
                  )
                }
              </tbody>    
            </table>
          </div>
        </div>
    );
    }
        
}

export default Board;