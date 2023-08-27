import React, { useState, useEffect } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {

  const [sushis, setSushis] = useState([])
  const [money, setMoney] = useState(100)

  useEffect(() => {
    fetch(API)
    .then(res => res.json())
    .then(sushis => {
      const updatedSushis = sushis.map(sushi => {
        return {...sushi, eaten: false}
      })
      setSushis(updatedSushis)
    })
  }, [])

  function handleEatSushi(eatenSushi) {
    if (money >= eatenSushi.price) {
      const updatedSushis = sushis.map(sushi => {
        if (sushi.id === eatenSushi.id) {
          return {...sushi, eaten: true}
        } else {
          return sushi
        }
      })

      setSushis(updatedSushis)
      setMoney(money => money - eatenSushi.price)
    } else {
      alert('Not enough money...')
    }
  }

  function handleAddMoney(moreMoney) {
    setMoney(money => money + moreMoney)
  }

  const eatenSushis = sushis.filter(sushi => sushi.eaten)

  return (
    <div className="app">
      <SushiContainer sushis={sushis} onEatSushi={handleEatSushi} />
      <Table money={money} onAddMoney={handleAddMoney} plates={eatenSushis} />
    </div>
  );
}

export default App;