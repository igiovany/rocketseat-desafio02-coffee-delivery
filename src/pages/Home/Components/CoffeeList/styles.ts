import styled from 'styled-components'

export const CoffeeListContainer = styled.div`
  padding: 2rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;

  h2 {
    width: 100%;
    font-family: 'Baloo 2', cursive;
    color: ${(props) => props.theme['base-subtitle']};
    line-height: 130%;
    font-weight: 800;
    font-size: 2rem;
    padding-bottom: 2rem;
  }
`
