import americano from '../../assets/products/americano.svg'
import arabe from '../../assets/products/arabe.svg'
import { Minus, Plus, Trash } from 'phosphor-react'
import {
  CheckoutContainer,
  ConfirmButton,
  OrderContainer,
  OrderItem,
  OrderSummary,
  RemoveButton,
  SummaryContainer,
} from './styles'
import { CoffeeQuantityTag } from '../Home/Components/CoffeeItem/styles'
import { CheckoutForm } from './Components/Form'

export function Checkout() {
  return (
    <CheckoutContainer>
      <OrderContainer>
        <h3>Complete seu pedido</h3>
        <CheckoutForm />
      </OrderContainer>
      <OrderSummary>
        <h3>Cafés selecionados</h3>
        <SummaryContainer>
          <OrderItem>
            <div>
              <img src={americano} alt="" />
              <div>
                <p>Americano</p>

                <CoffeeQuantityTag>
                  <button>
                    <Minus size={14} weight="bold" />
                  </button>
                  <span>1</span>
                  <button>
                    <Plus size={14} weight="bold" />
                  </button>
                </CoffeeQuantityTag>
                <RemoveButton>
                  <Trash size={16} />
                  REMOVER
                </RemoveButton>
              </div>
            </div>
            <strong>R$ 9,90</strong>
            <hr />
          </OrderItem>
          <OrderItem>
            <div>
              <img src={arabe} alt="" />
              <div>
                <p>Arabe</p>

                <CoffeeQuantityTag>
                  <button>
                    <Minus size={14} weight="bold" />
                  </button>
                  <span>1</span>
                  <button>
                    <Plus size={14} weight="bold" />
                  </button>
                </CoffeeQuantityTag>
                <RemoveButton>
                  <Trash size={16} />
                  REMOVER
                </RemoveButton>
              </div>
            </div>
            <strong>R$ 12,90</strong>
            <hr />
          </OrderItem>
          <div>
            <p>Total de itens</p>
            <p>R$ 22,80</p>
          </div>
          <div>
            <p>Entrega</p>
            <p>R$ 3,50</p>
          </div>
          <div>
            <strong>Total</strong>
            <strong>R$ 26,30</strong>
          </div>
          <ConfirmButton type="submit" form="checkoutForm">
            CONFIRMAR PEDIDO
          </ConfirmButton>
        </SummaryContainer>
      </OrderSummary>
    </CheckoutContainer>
  )
}
