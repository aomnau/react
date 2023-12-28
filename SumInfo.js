import React from 'react'

function SumInfo(props) {
    const style = {
        color : props.total > 10 ? 'blue' : 'initial'
    }
  return (
    <div className="suminfo">
      <h1 className={props.total > 10 ? 'red-text' : 'blue-text'}> Sum = {props.total}</h1>
      {/* {props.total > 10 
      ? <p>Over limit</p>
      : <p>OK</p>
    } */}
    {props.total > 10 && <p>Over limit</p>}
    </div>
  );
}

export default SumInfo