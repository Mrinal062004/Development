import React from 'react'
import {useMemo} from 'react';
const ChildComponent = React.memo((props) => {
  console.log("Child Component go to re-render hone ")
  return (
    <div>
        <button onClick={props.handleClick}>
            {props.buttonName}
        </button>
    </div>
  )
});

export default ChildComponent
// if we send the function in the buttotn they will re render again also if w euse react memo 