import styled from 'styled-components'
import * as RadioGroup from '@radix-ui/react-radio-group'

export const FormContaiter = styled.div`
  padding: 0 2.5rem;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  background-color: ${(props) => props.theme['base-card']};
  border-radius: 6px;
  padding: 2.5rem;
  margin-top: 1.5rem;

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
    border-radius: 4px;
    border: 1px solid ${(props) => props.theme['base-button']};

    background-color: ${(props) => props.theme['base-input']};
    padding: 0.75rem;

    color: ${(props) => props.theme['base-text']};
    font-size: 0.875rem;
    line-height: 130%;
    font-weight: 400;

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
      ::-webkit-outer-spin-button,
      ::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }
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
  border: 1px solid transparent;
  border-radius: 8px;
  background-color: ${(props) => props.theme['base-button']};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 1rem;

  color: ${(props) => props.theme['base-text']};
  font-size: 0.75rem;

  cursor: pointer;

  svg {
    color: ${(props) => props.theme.purple};
  }

  :hover {
    background-color: ${(props) => props.theme['base-hover']};
    color: ${(props) => props.theme['base-subtitle']};
    transition: background-color 0.2s, color 0.2s;
  }

  &[data-state='checked'] {
    background-color: ${(props) => props.theme['purple-light']};
    border: 1px solid ${(props) => props.theme.purple};
  }
`
