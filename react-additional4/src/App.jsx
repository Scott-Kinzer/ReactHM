import React, {useReducer} from "react";

import "./App.css";
import FormComponent from "./components/FormComponent/FormComponent";
import AnimalsList from "./components/AnimalsList/AnimalsList";

const reducer = (state, action) => {
    switch (action.type) {

        case "ADD_DOG":
            return {
                ...state,
                arrayOfDogs: [...state.arrayOfDogs, action.payload]
            }

        case "ADD_CAT":
            return {
                ...state,
                arrayOfCats: [...state.arrayOfCats, action.payload]
            }

        case "DELETE_CAT":
            return {
                ...state,
                arrayOfCats: [...state.arrayOfCats.filter((_, id) => id !== action.payload.id)]
            }

        case "DELETE_DOG":
            return {
                ...state,
                arrayOfDogs: [...state.arrayOfDogs.filter((_, id) => id !== action.payload.id)]
            }
    }

}


const App = () => {

    const [state, dispatch] = useReducer(reducer, {arrayOfCats: [], arrayOfDogs: []});


    return (
    <div className="container">
        <div>
            <FormComponent name={"DOG"}
                           addAnimal={(name) => dispatch({type: "ADD_DOG", payload: name})}
            />
            <AnimalsList list={state.arrayOfDogs}
                         deleteAnimal={(i) => dispatch({type: "DELETE_DOG", payload: {id: i}})}

            />
        </div>


        <div>
            <FormComponent name={"CAT"}
                           addAnimal={(name) => dispatch({type: "ADD_CAT", payload: name})}
            />
            <AnimalsList list={state.arrayOfCats}
                         deleteAnimal={(i) => dispatch({type: "DELETE_CAT", payload: {id: i}})}
            />
        </div>

    </div>
  );
};

export default App;
