import React from "react";
import "./App.css";

function ListItem(props) {
  return <li>{props.value}</li>;
}

export function Numbers(props) {
  return (
    <ul>
      {props.no.map((item) => (
        <ListItem key={item.toString()} value={item} />
      ))}
    </ul>
  );

  // return <ul>{liItems}</ul>;
}
