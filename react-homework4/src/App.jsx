import React, {useReducer} from "react";

import "./App.css";
import CounterComponent from "./components/CounterComponent/CounterComponent";

const reducer = (state, action) => {
    switch (action.type) {

        case "INCREASE_FIRST_COUNT":
            return {
                ...state,
                countOne: state.countOne + 1
            }

        case "INCREASE_SECOND_COUNT":
            return {
                ...state,
                countTwo: state.countTwo + 1
            }

        case "INCREASE_THIRD_COUNT":
            return {
                ...state,
                countThree: state.countThree + 1
            }


        case "DECREASE_FIRST_COUNT":
            return {
                ...state,
                countOne: state.countOne - 1
            }

        case "DECREASE_SECOND_COUNT":
            return {
                ...state,
                countTwo: state.countTwo - 1
            }

        case "DECREASE_THIRD_COUNT":
            return {
                ...state,
                countThree: state.countThree - 1
            }

        case "RESET_THIRD_COUNT":
            return {
                ...state,
                countThree: 0
            }

        case "RESET_SECOND_COUNT":
            return {
                ...state,
                countTwo: 0
            }

        case "RESET_FIRST_COUNT":
            return {
                ...state,
                countOne: 0
            }
    }

}


const App = () => {

    const [state, dispatch] = useReducer(reducer, {countOne: 0, countTwo: 0, countThree: 0});


    return (
    <div className="container">
        <CounterComponent count={state.countOne} increase={() => dispatch({type: "INCREASE_FIRST_COUNT"})}
                          decrease={() => dispatch({type: "DECREASE_FIRST_COUNT"})}
                          reset={() => dispatch({type: "RESET_FIRST_COUNT"})}
        />
        <CounterComponent count={state.countTwo}
                          increase={() => dispatch({type: "INCREASE_SECOND_COUNT"})}
                          decrease={() => dispatch({type: "DECREASE_SECOND_COUNT"})}
                          reset={() => dispatch({type: "RESET_SECOND_COUNT"})}/>

        <CounterComponent count={state.countThree}
                          increase={() => dispatch({type: "INCREASE_THIRD_COUNT"})}
                          decrease={() => dispatch({type: "DECREASE_THIRD_COUNT"})}
                          reset={() => dispatch({type: "RESET_THIRD_COUNT"})}
        />
   
    </div>
  );
};

export default App;
