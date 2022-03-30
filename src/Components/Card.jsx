import React from 'react';

function Card({ data, handleDelete, handleEditing, handleEditPlan, editing }) {
  return (
    <div className="cards-container">
      {data.map((plan, index) => {
        return (
          <div className="card" key={index}>
            <p className="published-at">
              Published At: {`${new Date().toJSON().slice(0, 10)}`}
            </p>
            <p className="date">{plan.addedDay} / Ramadan</p>
            <p
              className="text"
              id={index}
              contentEditable={editing}
              onKeyDown={(e) => {
                if (editing) {
                  if (e.key === 'Enter') {
                    handleEditPlan(+e.target.id, e.target.textContent);
                  }
                }
              }}
            >
              {plan.addedText}
            </p>
            <div className="icons">
              <i
                className="icon fa fa-trash"
                id={index}
                onClick={(e) => handleDelete(+e.target.id)}
              ></i>
              <i
                className="icon fas fa-edit"
                onClick={(e) => {
                  handleEditing();
                }}
              ></i>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Card;
