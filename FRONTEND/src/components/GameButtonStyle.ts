import styled from 'styled-components';

interface Props {
  color: string,
  selectedButton: boolean
}

export const Button = styled.button<Props> `
  height: 34px;
  width: 113px;
  background: ${(pr: any) => (pr.selectedButton ? pr.color : '#ffffff')} 0% 0% no-repeat padding-box;
  border: 2px solid ${(pr: any) => pr.color};
  border-radius: 100px;
  color: ${(pr: any) => (pr.selectedButton ? '#ffffff' : pr.color )};
  font-size: 14px;
  font-weight: bold;
`;