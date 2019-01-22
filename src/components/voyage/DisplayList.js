import React from 'react';

const DisplayList = props => {
  return (
    <ul className="avenir list pl0">
      {
        props.data && props.data.map(function(item,index) {
          return (
            <li key={index}>{item}</li>
          )
        })
      }
    </ul>
  )
}

export default DisplayList;
