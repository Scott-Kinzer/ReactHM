import React, {useState} from 'react';
import './App.css';
import ReadyComponent from "./components/ReadyComponent/ReadyComponent";
import ShipsList from "./components/ShipsList/ShipsList";
import PopUpInfoComponent from "./components/PopUpInfoComponent/PopUpInfoComponent";


function App() {

    const [isShowSite, setShowSite] = useState(true);
    const [isPopUp, setPopUp] = useState(false);

    const [idShip, setIdShip] = useState(1);


    return (
    <div className="App">
        {isShowSite &&  <ReadyComponent setShowSite={setShowSite} />}
        {(!isShowSite  &&  <ShipsList setIdShip={setIdShip} setPopUp={setPopUp} />)}

        {isPopUp && <PopUpInfoComponent  idShip={idShip} setPopUp={setPopUp} />}
    </div>
  );
}

export default App;


