import React from "react";
import { Link } from "react-router-dom";

const Breadcrumbs = ({ paths, ...props }) => {
  const lastIndex = paths.length - 1;
  return (
    <ul className="breadcrumb">
      {paths.map(({ url, text }, i) => (
        <li key={i}>
          {" "}
          {lastIndex === i ? text : <Link to={url}>{text}</Link>}{" "}
        </li>
      ))}
    </ul>
  );
};
export default Breadcrumbs;
