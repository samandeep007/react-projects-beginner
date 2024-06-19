import React from 'react';

export default function Button({ changeBg, bgColor, textColor, text }) {
  return (
    <button
      type="button"
      onClick={() => changeBg(bgColor)}
      style={{backgroundColor: bgColor, color: textColor}}
      className={`rounded-full px-3 py-2 text-sm font-semibold  shadow-lg`}
    >
      {text}
    </button>
  );
}
