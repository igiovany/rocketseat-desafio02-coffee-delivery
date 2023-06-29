import { Bank, CreditCard, CurrencyDollar, MapPin, Money } from 'phosphor-react'
import { FormContaiter, PaymentType, PaymentTypeItem } from './style'
import { useNavigate } from 'react-router-dom'

export function CheckoutForm() {
  const submit = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault()
    submit('/success')
  }

  return (
    <form id="checkoutForm" onSubmit={handleSubmit}>
      <FormContaiter>
        <span>
          <MapPin size={22} color="#CA7F17" />
          <h4>Endereço de Entrega</h4>
          <p>Informe o endereço onde deseja receber seu pedido</p>
        </span>
        <input type="text" required placeholder="CEP" maxLength={8} />
        <input type="text" required placeholder="Rua" />
        <input type="number" required placeholder="Número" />
        <input type="text" placeholder="Complemento" />
        <input type="text" required placeholder="Bairro" />
        <input type="text" required placeholder="Cidade" />
        <input type="text" required placeholder="UF" maxLength={2} />
      </FormContaiter>
      <FormContaiter>
        <span>
          <CurrencyDollar size={22} color="#8047F8" />
          <h4>Pagamento</h4>
          <p>
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </p>
        </span>
        <PaymentType defaultValue="creditCard">
          <PaymentTypeItem value="creditCard">
            <CreditCard size={16} />

            <p>CARTÃO DE CRÉDITO</p>
          </PaymentTypeItem>

          <PaymentTypeItem value="debitCard">
            <Bank size={16} />

            <p>CARTÃO DE DÉBITO</p>
          </PaymentTypeItem>

          <PaymentTypeItem value="money">
            <Money size={16} />

            <p>DINHEIRO</p>
          </PaymentTypeItem>
        </PaymentType>
      </FormContaiter>
    </form>
  )
}
