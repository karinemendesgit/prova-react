import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, RootStateOrAny } from 'react-redux';

import classes from "../styles/home.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Header from "../components/Header";
import api from '../services/games.json'
import BetTypeButton from "../components/GameButton";

const Home: React.FC = () => {
  const [ betSelected, setBetSelected ] = useState<number[]>([]);
  const savedGames = useSelector((state: RootStateOrAny) => state.cart.savedGames);
  const gameData = api.types;

  function handleFilter(id: number) {
    if (betSelected.includes(id)) {
      setBetSelected(x => x.filter((item) => item !== id));
      return;
    }
    setBetSelected(x => [...x, id]);
  }

  function isSelected (id: number) {
    return betSelected.includes(id);
  }

  interface GameProps {    
    numbers: number[],
    date: number,
    type: string;
    id: number
  }

  function listOfGames(game:GameProps[]) {
    return game.map((game, id) => (
      <li key={id}>

      </li>
    ))
  }

  const buttonFilters = gameData.map((game, id) => (
    <li key={id}>
      <BetTypeButton text={game.type} textColor={game.color} selected={isSelected(id)}
      onClick={() => handleFilter(id)} />
    </li>
  ));

  const betGames = betSelected.map((number) => gameData[number]);
  const gameFilter = savedGames.filter((game: any) => game.some((item: any) => item.type === game.type));
  const filteredGames = listOfGames(gameFilter);
  const allBetGames = listOfGames(savedGames);
  return (
    <div>
      <Header/>
      <main className={classes.home}>
        <div className={classes.rigthSide}>
          <div className={classes.firstLine}>
            <div>
              <h3>RECENT GAMES</h3>
            </div>
            <div>
              <p>Filters</p>
            </div>
            <div className={classes.buttonsHome}>
              <button className={classes.lotofacil}>Lotofácil</button>
              <button className={classes.megasena}>Mega-Sena</button>
              <button className={classes.lotomania}>Lotomania</button>
            </div>
          </div>
        </div>
        <div className={classes.leftSide}>
          <Link to="/new-bet">
            <h3>New Bet</h3>
            <FontAwesomeIcon icon={faArrowRight}/>
          </Link>
        </div>
      </main>
    </div>
  );
}

export default Home;