import { Bank, CreditCard, CurrencyDollar, MapPin, Money } from 'phosphor-react'
import {
  CheckoutContainer,
  CheckoutForm,
  CoffeeSelection,
  OrderContainer,
  PaymentType,
  PaymentTypeItem,
} from './styles'

export function Checkout() {
  return (
    <CheckoutContainer>
      <OrderContainer>
        <h3>Complete seu pedido</h3>

        <CheckoutForm id="checkoutForm">
          <span>
            <MapPin size={22} color="#CA7F17" />
            <h4>Endereço de Entrega</h4>
            <p>Informe o endereço onde deseja receber seu pedido</p>
          </span>
          <input type="text" required placeholder="CEP" />
          <input type="text" required placeholder="Rua" />
          <input type="number" required placeholder="Número" />
          <input type="text" placeholder="Complemento" />
          <input type="text" required placeholder="Bairro" />
          <input type="text" required placeholder="Cidade" />
          <input type="text" required placeholder="UF" />

          <span>
            <CurrencyDollar size={22} color="#8047F8" />
            <h4>Pagamento</h4>
            <p>
              O pagamento é feito na entrega. Escolha a forma que deseja pagar
            </p>
          </span>

          <PaymentType>
            <PaymentTypeItem value="creditCard">
              <span>
                <CreditCard size={16} />
              </span>
              <p>CARTÃO DE CRÉDITO</p>
            </PaymentTypeItem>

            <PaymentTypeItem value="debitCard">
              <span>
                <Bank size={16} />
              </span>
              <p>CARTÃO DE DÉBITO</p>
            </PaymentTypeItem>

            <PaymentTypeItem value="money">
              <span>
                <Money size={16} />
              </span>
              <p>DINHEIRO</p>
            </PaymentTypeItem>
          </PaymentType>
        </CheckoutForm>
      </OrderContainer>
      <CoffeeSelection>
        <h3>Cafés selecionados</h3>
        <button type="submit" form="checkoutForm">
          CONFIRMAR PEDIDO
        </button>
      </CoffeeSelection>
    </CheckoutContainer>
  )
}
