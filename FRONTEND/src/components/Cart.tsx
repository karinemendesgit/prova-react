import { useDispatch, useSelector, RootStateOrAny } from "react-redux";
import { useNavigate } from "react-router-dom";

import { cartActions } from "../store/cart";
import trash from '../assets/trash.svg';
import formatedPrice from '../utils/cart-facilities'
import { toast } from "react-toastify";

export function Cart(): JSX.Element {
  const gameContext = useSelector((state: RootStateOrAny) => state.cart.games)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const price = formatedPrice;

  function handleSaveGame() {
    try {
      dispatch(cartActions.saveGame)
      navigate('/home')
    } catch (error: any) {
      toast.error(error.message)
    }
  }
  
  return (
  <>
    <h2>CART</h2>
      <div>          
        <div>
                {gameContext.length > 0 ? (
                  gameContext.map((game, index) => {
                    <div>
                      <div>
                        <button onClick={removeItemFromCart}>
                          <img src={trashIcon}/>
                        </button>
                      </div>      
                      <div>
                        <p>
                          {game.numbers.toString().replace(/,/g, ', ')}
                        </p>
                        <div>
                          <p>{game.name}</p>
                          <span>{game.price}</span>
                        </div>
                      </div>
                    </div>
                  })
                ) : (<p>Empty Cart</p>)}
              </div>
            </div>
            <div >
              <h2>CART <p>TOTAL: {price}</p></h2> 
            </div>               
  </>
)
}