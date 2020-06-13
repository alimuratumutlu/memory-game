import React, { useEffect, useContext, useState } from "react";

// Context
import { GlobalContext } from "./context/GlobalState";

import Card from "./components/Card";

function App() {
  const [openCount, setOpenCount] = useState(0);

  const {
    duplicatedSmurfs,
    randomSmurfs,
    openSmurfs,
    getShuffledSmurfs,
    updateRandomSmurfs,
    addToOpenSmurfs,
    resetOpenSmurfs,
  } = useContext(GlobalContext);

  const checkSmurfs = (smurf) => {
    if (openCount === 1) {
      let randomSmurfsNew = randomSmurfs;
      if (
        openSmurfs[0].name === smurf.name &&
        openSmurfs[0].index !== smurf.index
      ) {
        randomSmurfsNew[openSmurfs[0].index].complete = true;
        randomSmurfsNew[smurf.index].complete = true;
        setOpenCount(0);
      } else {
        randomSmurfsNew[openSmurfs[0].index].close = true;
        randomSmurfsNew[smurf.index].close = true;
        setOpenCount(0);
      }
      updateRandomSmurfs(randomSmurfsNew);
      resetOpenSmurfs([{ name: smurf.name, index: smurf.index }]);
    }
  };

  const handleClick = (name, index) => {
    addToOpenSmurfs({
      name,
      index,
    });
    setOpenCount(openCount + 1);
    setTimeout(() => {
      checkSmurfs({
        name,
        index,
      });
    }, 1000);
    if (openCount < 2) {
      let randomSmurfsArray = randomSmurfs;
      randomSmurfsArray[index].close = false;
      updateRandomSmurfs(randomSmurfsArray);
    }
  };

  const createNewGameScene = () => {
    let finalSmurfsArray = [];
    randomSmurfs.map(function (name) {
      return finalSmurfsArray.push({
        name,
        close: true,
        complete: false,
        fail: false,
      });
    });
  };

  useEffect(() => {
    getShuffledSmurfs(duplicatedSmurfs);
    createNewGameScene();
  }, [randomSmurfs]);

  return (
    <div className="playground">
      {randomSmurfs &&
        randomSmurfs.map((smurf, index) => (
          <Card
            key={index}
            name={smurf.name}
            handleCardClick={() => {
              handleClick(smurf.name, index);
            }}
            close={smurf.close}
            complete={smurf.complete}
          />
        ))}
    </div>
  );
}

export default App;
