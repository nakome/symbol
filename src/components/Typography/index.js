import React from "react";
import "./index.css";
export const H1 = (props) => <h1>{props.children}</h1>;
export const P = (props) => <p>{props.children}</p>;
export const Pre = (props) => <pre {...props}>{props.children}</pre>;
export const Table = (props) => (
  <table>
    <th>
      {props.headers.map((item, index) => (
        <td key={index.toString()}>{item}</td>
      ))}
    </th>
    <tr>
      {props.values.map((item, index) => (
        <td key={index.toString()}><code>{item}</code></td>
      ))}
    </tr>
  </table>
);
