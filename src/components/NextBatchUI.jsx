import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../context";

const NextBatchUI = () => {
  const { skip, fetchNextBatch } = useContext(GlobalContext);

  const handleDecreasePage = () => {
    fetchNextBatch(-1);
  };

  const handleIncreasePage = () => {
    fetchNextBatch(1);
  };

  return (
    <div className="flex flex-row gap-5 justify-center my-5">
      <button className="text-xl" onClick={handleDecreasePage}>{"<"}</button>
      <h1 className="text-xl">{skip + 1}</h1>
      <button className="text-xl" onClick={handleIncreasePage}>{">"}</button>
    </div>
  );
};

export default NextBatchUI;
