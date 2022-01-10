import styled from 'styled-components';

interface ListProps {
  color: string
}

export const ListContainer = styled.div`
  display: flex;
  min-height: 94px;
`

export const StyledDiv = styled.div<ListProps> `
  width: 6px;
  background: ${pr => pr.color} 0% 0% no-repeat padding-box;
  border-radius: 100px;
  margin-right: 15px;
`

export const ListItems = styled.div<ListProps>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  h3 {
    color: #868686;
    font-style: italic;
    &.gametype {
      color: ${pr => pr.color};
    }
  }
  p {
    font-size: 17px;
    font-style: normal;
    margin-top: 15px;
    margin-bottom: 11px;
  }
`;