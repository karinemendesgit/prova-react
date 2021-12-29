import { ButtonHTMLAttributes } from 'react';
import { Button } from './GameButtonStyle'

interface GameButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string,
  textColor: string,
  selected: boolean
}

function BetTypeButton(props: GameButtonProps): JSX.Element {
  return (
    <Button
      selectedButton={props.selected}
      color={props.textColor}
      {...props}
    >
      {props.text}
    </Button>
  )
}

export default BetTypeButton;