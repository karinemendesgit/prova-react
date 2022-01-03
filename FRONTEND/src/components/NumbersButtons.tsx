import { produceWithPatches } from '@reduxjs/toolkit/node_modules/immer';
import React, { ButtonHTMLAttributes, useEffect, useState } from 'react';
import { useSelector, useDispatch, RootStateOrAny } from 'react-redux';

import { cartActions } from '../store/cart';
import Number from './NumbersButtonsStyle';

interface NumberButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  index: string;
  color: string;
  onClick: () => void;
}

function NumbersButton (props : NumberButtonProps): JSX.Element  {
  const dispatch = useDispatch();
  let selected: boolean = false;
  const numbers = useSelector((state: RootStateOrAny) => state.cart.selectedNumbers);
  if (numbers.includes(+props.index)) {
    selected = true;
  }
  /*useEffect(() => {
    if(numbers.includes(number)) {
      setSelected(true);
    } else {
      setSelected(false);
    }
  }, [numbers, number]);*/

  /*function handleClickNumber (number:number) {
    dispatch(cartActions.addSelectNumber(number))
  }*/
  return (
    <Number selected={selected} numberColor={props.color} {...props}>{props.index}</Number>
  );
}

export default NumbersButton;