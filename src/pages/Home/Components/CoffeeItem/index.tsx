import { Minus, Plus, ShoppingCartSimple } from 'phosphor-react'
import americano from '../../../../assets/products/americano.svg'
import arabe from '../../../../assets/products/arabe.svg'
import cafeComLeite from '../../../../assets/products/cafe-com-leite.svg'
import cafeGelado from '../../../../assets/products/cafe-gelado.svg'
import capuccino from '../../../../assets/products/capuccino.svg'
import chocolateQuente from '../../../../assets/products/chocolate-quente.svg'
import cubano from '../../../../assets/products/cubano.svg'
import espressoCremoso from '../../../../assets/products/espresso-cremoso.svg'
import espresso from '../../../../assets/products/espresso.svg'
import havaiano from '../../../../assets/products/havaiano.svg'
import irlandes from '../../../../assets/products/irlandes.svg'
import latte from '../../../../assets/products/latte.svg'
import macchiato from '../../../../assets/products/macchiato.svg'
import mochaccino from '../../../../assets/products/mochaccino.svg'
import {
  AddToCartButton,
  CoffeeItemContainer,
  CoffeePriceTag,
  CoffeeQuantityTag,
} from './styles'

export function CoffeeItem() {
  return (
    <CoffeeItemContainer>
      <img src={espresso} alt="" />
      <span>TRADICIONAL</span>
      <h3>Expresso Tradicional</h3>
      <p>O tradicional café feito com água quente e grãos moídos</p>
      <CoffeePriceTag>
        <span>
          R$
          <strong>9,90</strong>
        </span>
        <CoffeeQuantityTag>
          <button>
            <Minus size={14} weight="bold" />
          </button>
          <span>1</span>
          <button>
            <Plus size={14} weight="bold" />
          </button>
        </CoffeeQuantityTag>
        <AddToCartButton>
          <ShoppingCartSimple size={22} weight="fill" />
        </AddToCartButton>
      </CoffeePriceTag>
    </CoffeeItemContainer>
  )
}
