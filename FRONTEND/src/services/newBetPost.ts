import api from "./api";

export interface betProps {
  choosen_numbers: number[];
  user_id: number;
  game_id: number;
  price: number;
  created_at: string;
  updated_at: string;
  id: number;
}

interface postProps {
  id?: number;
  game_id: number;
  numbers: number[];
}

export const NewBetPost = async (token: string | null, games:postProps[]) => { 

 const config = {
    headers: { 
      Authorization: `Bearer ${token}`
    }
  }
  const response = api.post<betProps[]>('bet/new-bet', {games}, config)
  .then(response => response.data)
  .catch((error) => {
    console.log(error)
  })
  return response;
}