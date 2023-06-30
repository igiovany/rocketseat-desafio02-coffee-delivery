import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import successImg from '../../assets/success-img.svg'
import { InfoContainer, SuccessContainer } from './styles'

export function Success() {
  return (
    <SuccessContainer>
      <h2>Uhu! Pedido confirmado</h2>
      <p>Agora é só aguardar que logo o café chegará até você</p>
      <InfoContainer>
        <div>
          <span>
            <MapPin size={16} weight="fill" />
          </span>
          <div>
            <p>
              Entrega em <strong>Rua João Daniel Martinelli, 102</strong>
            </p>
            <p>Farrapos - Porto Alegre, RS</p>
          </div>
        </div>
        <div>
          <span>
            <Timer size={16} weight="fill" />
          </span>
          <div>
            <p>Previsão de entrega</p>
            <strong>20 min - 30 min </strong>
          </div>
        </div>
        <div>
          <span>
            <CurrencyDollar size={16} />
          </span>
          <div>
            <p>Pagamento na entrega</p>
            <strong>Cartão de Crédito</strong>
          </div>
        </div>
      </InfoContainer>
      <img src={successImg} alt="" />
    </SuccessContainer>
  )
}
