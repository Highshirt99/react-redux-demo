import React, {useState} from "react";
import { connect } from "react-redux";
import buyCake from './cake/cakeActions';

function NewCakeContainer(props) {
    const[number, setNumber] = useState(1)
  return (
    <div>
      <h2>Number of Cakes - {props.numOfCakes}</h2>
      <input type="number" value={number} onChange = {(e) => setNumber(e.target.value)}/>
      <button onClick={() => props.buyCake(number)}>Buy {number} Cake</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    numOfCakes: state.cake.numOfCakes,
  };
};

const matchDispatchToProps = (dispatch) => {
  return {
    buyCake: (number) => dispatch(buyCake(number)),
  };
};
export default connect(mapStateToProps, matchDispatchToProps)(NewCakeContainer);