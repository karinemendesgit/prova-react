import { ButtonHTMLAttributes  } from 'react';
import { useSelector, RootStateOrAny } from 'react-redux';

import Number from './NumbersButtonsStyle';

interface NumberButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  index: string;
  color: string;
  onClick: () => void;
}

function NumbersButton (props : NumberButtonProps): JSX.Element  {
  let selected: boolean = false;
  const numbers = useSelector((state: RootStateOrAny) => state.cart.games.numbers);
  if (numbers.includes(+props.index)) {
    selected = true;
  }
  
  return (
    <Number selected={selected} numberColor={props.color} {...props}>{props.index}</Number>
  );
}

export default NumbersButton;