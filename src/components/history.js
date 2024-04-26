import React from "react";

export const History = ({ history }) => {
  let htry = history.slice(0).reverse();
  return (
    <div className="history">
      {htry.map((item, index) =>
        index < 4 ? (
          item.type === "deposit" ? (
            <div className="item-deposit" key={index}>
              <p>{item.name}</p>
            </div>
          ) : (
            <div className="item-expense" key={index}>
              <p>{item.name}</p>
            </div>
          )
        ) : (
          <span key={index}></span>
        )
      )}
    </div>
  );
};
