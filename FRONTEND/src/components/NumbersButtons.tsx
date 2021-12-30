import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch, RootStateOrAny } from 'react-redux';

import { cartActions } from '../store/cart';
import Number from './NumbersButtonsStyle';

interface NumberButtonProps {
  color: string;
  number: number;
}

const NumbersButton: React.FC<NumberButtonProps> = ({color, number}) => {
  const dispatch = useDispatch();
  const [ selected, setSelected] = useState(false);
  const numbers = useSelector((state: RootStateOrAny) => state.cart.selectedNumbers);

  useEffect(() => {
    if(numbers.includes(number)) {
      setSelected(true);
    } else {
      setSelected(false);
    }
  }, [numbers, number]);

  function handleClickNumber (number:number) {
    dispatch(cartActions.addSelectNumber(number))
  }
  return (
    <Number selected={selected} color={color} onClick={() => handleClickNumber(number)} >{number}</Number>
  );
}

export default NumbersButton;