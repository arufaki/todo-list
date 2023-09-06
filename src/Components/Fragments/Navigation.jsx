import { useState } from "react";

export default function Navigation({ slider, currentSlider }) {
  const lists = ["All", "Active", "Completed"];

  const handleSlider = (index) => {
    currentSlider(index);
  };
  return (
    <ul>
      {lists.map((list, index) => (
        <li key={index} onClick={() => handleSlider(index)}>
          {list}
          <span className={index === slider ? "slider" : null}></span>
        </li>
      ))}
    </ul>
  );
}
