import api from "./api";
import { toast } from "react-toastify";

export interface betProps {
  choosen_numbers: string;
  user_id: number;
  game_id: number;
  price: number;
  created_at: string;
  updated_at: string;
  id: number;
}

interface postProps {
  game_id: number;
  numbers: number[];
}

export const NewBetPost = async (games: postProps[]) => {
  const token = localStorage.getItem("token");  
  const config = {
    headers: { 
      Authorization: `Bearer ${token}`
    }
  }

  const bodyParameters = { 
    games: games
  };

  const response = api.post('bet/new-bet', bodyParameters, config)
  .then((response: any) => {return response})
  .catch((error:any) => {
    toast.error(error.response.data.message);
  });
  return response;
}