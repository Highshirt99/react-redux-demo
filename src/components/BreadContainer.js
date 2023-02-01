import React from "react";
import { useSelector, useDispatch } from "react-redux";
import buyBread from "../redux/bread/breadActions";

function BreadContainer() {
  const numOfBreads = useSelector((state) => state.bread.numOfBreads);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Number of Breads - {numOfBreads} </h2>
      <button onClick={() => dispatch(buyBread())}>Buy Bread</button>
    </div>
  );
}

export default BreadContainer;
