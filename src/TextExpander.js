import React, { useState } from "react";

const boxStyle = {
  padding: "10px",
  border: "1px solid #ccc",
  borderRadius: "7px",
  backgroundColor: "#f7f7f7",
  color: "#000",
};

export default function TextExpander({
  children,
  collapsedNumWords = 20,
  expandButtonText = "Show more",
  collapseButtonText = "Show less",
  buttonColor = "",
  className = "",
  isExpanded = false,
}) {
  collapsedNumWords = Math.min(children.split(" ").length, collapsedNumWords);
  const [expanded, setExpanded] = useState(isExpanded);
  const displayText = expanded
    ? children
    : children.split(" ").slice(0, collapsedNumWords).join(" ") + " ...";
  const clickHandler = () => {
    setExpanded(!expanded);
  };

  const buttonStyle = {
    backgroundColor: buttonColor,
    border: "none",
  };

  return (
    <div style={boxStyle} className={className}>
      <span>{displayText}</span>
      {expanded ? (
        <button onClick={clickHandler} style={buttonStyle}>
          {collapseButtonText}
        </button>
      ) : (
        <button onClick={clickHandler} style={buttonStyle}>
          {expandButtonText}
        </button>
      )}
    </div>
  );
}
