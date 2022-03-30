import React from 'react';

const days = [];
for (let i = 1; i <= 30; i++) {
  days.push(i);
}
function Day({ handleDayChange, day }) {
  return (
    <div className="day-container">
      <label>Choose a Day</label>
      <select
        className="select"
        name="days"
        value={day}
        onChange={(e) => {
          handleDayChange(+e.target.value);
        }}
      >
        {days.map((day) => (
          <option key={day} value={day}>
            day: {day}
          </option>
        ))}
      </select>
    </div>
  );
}
export default Day;
