import styled from 'styled-components';

interface CartProp {
  color: string
}

export const CardStyle = styled.div `
  display: flex;
  font-weight: bold;
  align-items: center;
  justify-content: flex-start;
  margin-right: 15px;
  button {
    border: none;
    background-color: #ffffff;
  }
`

export const DivStyled = styled.div<CartProp>`
  min-width: 4px;
  height: 86px;
  margin-right: 10px;
  background: ${pr => pr.color} 0% 0% no-repeat padding-box;
  border-radius: 100px 0px 0px 100px;
`

export const DivFlex = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const ListStyle = styled.div<CartProp>`
  display: flex;
  align-items: center;
  gap: 14px;
  p {
    color: ${pr => pr.color};
  }
  span {
    font-style: normal;
  }
`

