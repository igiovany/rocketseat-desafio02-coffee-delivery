import styled from 'styled-components'

export const CoffeeItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 1rem 1.25rem 0;
  width: 16rem;
  /* gap: 0.5rem; */

  img {
    width: 7.5rem;
    height: 7.5rem;
  }

  span {
    background-color: ${(props) => props.theme['yellow-light']};
    border-radius: 8px;

    color: ${(props) => props.theme['yellow-dark']};
    font-size: 0.625rem;
    line-height: 130%;
    font-weight: bold;

    height: 1.3125rem;
    padding: 0 0.25rem;
    margin: 0.25rem 0;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  h3 {
    font-family: 'Baloo 2', cursive;
    color: ${(props) => props.theme['base-subtitle']};
    font-size: 1.25rem;
    line-height: 130%;
    font-weight: bold;
    margin: 0.25rem 0;
  }

  p {
    color: ${(props) => props.theme['base-label']};
    font-size: 0.875rem;
    line-height: 130%;
    text-align: center;
    margin-bottom: 0.75rem;
    width: 90%;
  }
`
export const CoffeePriceTag = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  span {
    background: transparent;
    color: ${(props) => props.theme['base-text']};

    font-size: 0.875rem;
    line-height: 130%;
    font-weight: 400;

    padding: 0;
    margin: 0;

    strong {
      font-family: 'Baloo 2', cursive;
      color: ${(props) => props.theme['base-text']};
      font-size: 1.5rem;
      line-height: 130%;
      font-weight: 800;
      margin: 0 0.25rem;
    }
  }
`

export const CoffeeQuantityTag = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: ${(props) => props.theme['base-button']};
  padding: 0.25rem;
  gap: 0.5rem;
  border-radius: 8px;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    color: ${(props) => props.theme.purple};
    width: 2rem;
    height: 2rem;
    border: none;
    margin: 0 0.25rem;
    cursor: pointer;
  }

  span {
    background: transparent;
    color: ${(props) => props.theme['base-title']};
    font-size: 1rem;
    line-height: 130%;
    font-weight: 400;
    padding: 0;
    margin: 0;
  }
`

export const AddToCartButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.purple};
  color: ${(props) => props.theme['base-card']};
  width: 2.375rem;
  height: 2.375rem;
  border-radius: 8px;
  border: none;
  cursor: pointer;

  :hover {
    background-color: ${(props) => props.theme['purple-dark']};
    transition: background-color 0.4s;
  }
`
