import api from "./api";
import { toast } from "react-toastify";

/*export interface betProps {
  choosen_numbers: number[];
  user_id: number;
  game_id: number;
  price: number;
  created_at: string;
  updated_at: string;
  id: number;
}*/

interface postProps {
  game_id: number;
  numbers: number[];
}

export const NewBetPost = async (token: string | null, games: postProps[]) => { 

 const config = {
    headers: { 
      Authorization: `Bearer ${token}`
    }
  }

  const bodyParameters = { 
    games: games
  };

  try {
    const response = await api.post('bet/new-bet', bodyParameters, config);
    console.log(response)
    return response.data;
  } catch(error:any) {
    toast.error(error);
  }
}