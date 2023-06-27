import styled from 'styled-components'
import * as RadioGroup from '@radix-ui/react-radio-group'

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
    margin-bottom: 1.5rem;
  }
`

export const CheckoutForm = styled.form`
  padding: 0 2.5rem;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;

  span {
    min-width: 100%;
    display: flex;
    align-items: center;
    flex-wrap: wrap;

    h4 {
      color: ${(props) => props.theme['base-subtitle']};
      font-size: 1rem;
      line-height: 130%;
      font-weight: 400;
    }

    p {
      min-width: 100%;
      margin-left: 1.4rem;

      color: ${(props) => props.theme['base-text']};
      font-size: 0.875rem;
      line-height: 130%;
      font-weight: 400;
    }
  }

  input {
    padding: 0.75rem;

    ::placeholder {
      color: ${(props) => props.theme['base-label']};
    }
    :nth-child(2) {
      width: 12.5rem;
    }
    :nth-child(3) {
      width: 100%;
    }
    :nth-child(4) {
      width: 12.5rem;
    }
    :nth-child(5) {
      width: calc(100% - 13.5rem);
    }
    :nth-child(6) {
      width: 12.5rem;
    }
    :nth-child(7) {
      width: calc(100% - 18.25rem);
    }
    :nth-child(8) {
      width: 3.75rem;
    }
  }
`

export const PaymentType = styled(RadioGroup.Root)`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin-top: 0.5rem;
`

export const PaymentTypeItem = styled(RadioGroup.Item)`
  border: none;
  border-radius: 8px;
  background-color: ${(props) => props.theme['base-button']};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 1rem;

  color: ${(props) => props.theme['base-text']};
  font-size: 0.75rem;

  span {
    min-width: auto;
    color: ${(props) => props.theme.purple};
  }
`

export const CoffeeSelection = styled.div`
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
