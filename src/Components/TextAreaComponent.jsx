import React from 'react';

function TextAreaComponent({
  handleOnTextAdded,
  handleOnTextChanged,
  text,
  isTextAdded,
}) {
  return (
    <div className="textarea-container">
      <label className="textarea-label" htmlFor="ramadan-todo">
        What to do in 30 Ramadan?
      </label>
      <textarea
        name="ramadan-todo"
        value={text}
        onChange={(e) => {
          handleOnTextChanged(e.target.value);
        }}
      ></textarea>
      <input
        type="button"
        value="Add"
        onClick={() => {
          handleOnTextAdded();
        }}
      />
      {isTextAdded ? (
        <p>Plan Added Successfully</p>
      ) : (
        <p>Plan Text Should Be More Than 5 Characters</p>
      )}
    </div>
  );
}

export default TextAreaComponent;
