import React from 'react';

function Card({ data, isTextAdded, handleDelete }) {
  return (
    <div className="cards-container">
      {data.map((plan, index) => {
        return (
          <div className="card" key={index}>
            <p className="published-at">
              Published At: {`${new Date().toJSON().slice(0, 10)}`}
            </p>
            <p className="date">{plan.addedDay} / Ramadan</p>
            <p className="text">{plan.addedText}</p>
            <div className="icons">
              <i className="icon fa fa-trash" id={index} onClick={(e)=>handleDelete(e.target.id)}></i>
              <i className="icon fas fa-edit"></i>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Card;
