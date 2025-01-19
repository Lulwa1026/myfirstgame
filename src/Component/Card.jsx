import React from "react";

export const Card = ({ imge, onClick, isFlipped, id }) => {
  return (
    <div className="card" onClick={() => onClick(id)}>
      <img src={isFlipped ? imge.img : imge.cover} alt="card" />
    </div>
  );
};
