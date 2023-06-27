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
  }

  p {
    min-width: 100%;
    margin-left: 1.4rem;

    color: ${(props) => props.theme['base-text']};
    font-size: 0.875rem;
    line-height: 130%;
    font-weight: 400;
  }
`

export const PaymentType = styled(RadioGroup.Root)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin-top: 0.5rem;
`

export const PaymentTypeItem = styled(RadioGroup.Item)`
  border: none;
  background-color: ${(props) => props.theme['base-button']};
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
