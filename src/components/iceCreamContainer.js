import React from "react";
import { connect } from "react-redux";
import buyIceCream from "../redux/iceCream/iceCreamActions";

function IceCreamContainer(props) {
  return (
    <div>
      <h2>Number of Icecreams - {props.numOfIceCreams}</h2>
      <button onClick={props.buyIceCream}>Buy Icecream</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    numOfIceCreams: state.iceCream.numOfIceCreams,
  };
};

const matchDispatchToProps = (dispatch) => {
  return {
    buyIceCream: () => dispatch(buyIceCream()),
  };
};
export default connect(
  mapStateToProps,
  matchDispatchToProps
)(IceCreamContainer);
