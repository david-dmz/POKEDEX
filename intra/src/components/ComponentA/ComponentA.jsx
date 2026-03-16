import { Children } from "react";

export default function ComposantA({ children }) {
  return (
    <>
      <div
        className="section-wrapper"
        style={{
          border: "3px double #222",
          padding: "20px",
          marginBottom: "20px",
          borderRadius: "4px",
        }}
      ></div>
      <h2 style={{ textTransform: "uppercase", letterSpacing: "2px" }}>
        Module Alpha
      </h2>
      {Children.map(children, (child) => (
        <div className="child">{child}</div>
      ))}
    </>
  );
}
