import React from "react"
import './App.css';
import ListItem from "./Component/Listitem/ListItem";

const App=()=> {
    const itemArray = [
      {
        imgSrc: `https://cdn2.chrono24.com/images/uhren/20915649-lklq86c2n547fvsp3sfxkhln-Square210.jpg`,
        name: 'Richard Mille RM 010',
        price: `$169, 995`,
      },
      {
        imgSrc: `https://cdn2.chrono24.com/images/uhren/22493541-nmnajvpjvkf9gr78bp3e9t5r-Square210.jpg`,
        name: 'Richard Mille RM 67-02',
        price: `$395, 000`,
      },

    ]


  return(
    <div className="container">

      <ListItem />
      <ListItem itemArray={itemArray} />
    </div>

  )
}

export default App;
