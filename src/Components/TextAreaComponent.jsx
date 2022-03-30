import React from 'react';

function TextAreaComponent({
  handleOnTextAdded,
  handleOnTextChanged,
  addedText,
  isTextAdded,
  day,
}) {
  return (
    <div className="textarea-container">
      <label className="textarea-label" htmlFor="ramadan-todo">
        What to do in {day} Ramadan?
      </label>
      <textarea
        name="ramadan-todo"
        value={addedText}
        onChange={handleOnTextChanged}
      ></textarea>
      <input type="button" value="Add" onClick={handleOnTextAdded} />
      {isTextAdded ? (
        <p
          style={{
            color: '#73E831',
          }}
        >
          Plan Added Successfully
        </p>
      ) : (
        <p
          style={{
            color: '#fa1100',
          }}
        >
          Text Should Be More Than 5 Characters
        </p>
      )}
    </div>
  );
}

export default TextAreaComponent;
