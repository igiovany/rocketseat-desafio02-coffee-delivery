import styled from 'styled-components'

export const CheckoutContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-top: 2rem;
  gap: 2rem;
`

export const OrderContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 60%;
  max-width: 60%;

  h3 {
    font-family: 'Baloo 2', cursive;
    color: ${(props) => props.theme['base-subtitle']};
    font-size: 1.125rem;
    line-height: 130%;
    font-weight: 700;
  }
`

export const OrderSummary = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 40%;
  max-width: 40%;

  h3 {
    font-family: 'Baloo 2', cursive;
    color: ${(props) => props.theme['base-subtitle']};
    font-size: 1.125rem;
    line-height: 130%;
    font-weight: 700;
    margin-bottom: 1.5rem;
  }
`

export const SummaryContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 6px 44px 6px 44px;
  background-color: ${(props) => props.theme['base-card']};
  padding: 2.5rem;

  > div {
    display: flex;
    justify-content: space-between;

    > p {
      color: ${(props) => props.theme['base-text']};
      font-size: 1rem;
      line-height: 130%;
      font-weight: 400;
      margin-bottom: 1rem;
    }

    > strong {
      color: ${(props) => props.theme['base-subtitle']};
      font-size: 1.25rem;
      line-height: 130%;
      font-weight: 700;
      margin-bottom: 1rem;
    }
  }
`

export const OrderItem = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-wrap: wrap;

  > div:first-child {
    display: flex;
    flex-wrap: wrap;
    width: 75%;

    img {
      width: 4rem;
      height: 4rem;
      margin-right: 1.5rem;
    }
    > div {
      display: flex;
      flex-wrap: wrap;
      align-items: flex-start;
      justify-content: start;
      gap: 0.5rem;
      width: calc(100% - 5.5rem);

      p {
        width: 100%;
        color: ${(props) => props.theme['base-subtitle']};
        font-size: 1rem;
        line-height: 130%;
        font-weight: 400;
      }
    }
  }

  strong {
    color: ${(props) => props.theme['base-text']};
    font-size: 1rem;
    line-height: 130%;
    font-weight: 700;
  }

  hr {
    width: 100%;
    margin: 1.5rem 0;
    border-top: 1px solid ${(props) => props.theme['base-button']};
  }
`

export const RemoveButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props) => props.theme['base-button']};
  border: none;
  border-radius: 6px;
  padding: 0 0.5rem;
  gap: 0.5rem;
  height: 2.375rem;
  cursor: pointer;

  color: ${(props) => props.theme['base-text']};
  font-size: 0.75rem;
  line-height: 160%;
  font-weight: 400;

  :hover {
    background-color: ${(props) => props.theme['base-hover']};
    transition: background-color 0.2s;
  }

  svg {
    color: ${(props) => props.theme.purple};
  }
`

export const ConfirmButton = styled.button`
  width: 100%;
  border: none;
  border-radius: 6px;
  background-color: ${(props) => props.theme.yellow};
  color: ${(props) => props.theme.white};
  font-size: 0.875rem;
  line-height: 160%;
  font-weight: 400;

  padding: 0.75rem;

  :hover {
    background-color: ${(props) => props.theme['yellow-dark']};
  }
`
