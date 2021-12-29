import styled from 'styled-components';

interface ListProps {
  color: string
}

export const ListContainer = styled.div`
  display: flex;
`

export const StyledDiv = styled.div<ListProps> `
  width: 6px;
  min-height: 94px;
  background: ${pr => pr.color} 0% 0% no-repeat padding-box;
  border-radius: 100px;
  margin-right: 15px;
`

export const ListItems = styled.div<ListProps>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 15px;
  h3 {
    color: #868686;
    font-size: 20px;
    font-style: italic;
    &.gametype {
      color: ${pr => pr.color};
    }
  }
  p {
    font-size: 17px;
  }
`;