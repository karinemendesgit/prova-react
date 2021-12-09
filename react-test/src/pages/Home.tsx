import React from "react";
import rigthArrow from "../assets/right-arrow.svg";

const Home: React.FC = () => {
  return (
    <div>
      <header>
        <div>
          <div>
            <strong>TGL</strong>
          </div>
        </div>
        <div>
          <h1>Account</h1>
          <div>
            <h1>Log out</h1> 
            <img src={rigthArrow} alt="right arrow gray icon" />
          </div>            
        </div>
      </header>
      <main>
        <div>
          <div>
            <h3>RECENT GAMES</h3>
            <p>Filters</p>
            <button>Lotofácil</button>
            <button>Mega-Sena</button>
            <button>Lotomania</button>
          </div>
          <div>
            <h3>New Bet</h3>
            
          </div>
        </div>
      </main>
    </div>
  );
}

export default Home;