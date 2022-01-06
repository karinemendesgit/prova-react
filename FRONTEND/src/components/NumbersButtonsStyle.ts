import styled from "styled-components";

interface numbersProps {
  selected: boolean;
  numberColor: string;
}

const Number = styled.button<numbersProps> `
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => (props.selected ? props.numberColor : '#ADC0C4')};
  width: 63px;
  height: 65px;
  border-radius: 50%;
  font-size: 20px;
  font-weight: bold;
  color: #FFFFFF;
  margin-top: 20px;
  border: none;
  cursor: pointer;
`

export default Number;