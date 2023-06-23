import { ShoppingCart, Package, Timer, Coffee } from 'phosphor-react'
import homeBanner from '../../assets/home-banner.svg'
import { BannerContainer, BannerItems, BannerText } from './styles'

export function Home() {
  return (
    <BannerContainer>
      <BannerText>
        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
        <p>
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </p>
        <BannerItems>
          <div>
            <span>
              <ShoppingCart size={16} weight="fill" color="white" />
            </span>
            <p>Compra simples e segura</p>
          </div>
          <div>
            <span>
              <Package size={16} weight="fill" color="white" />
            </span>
            <p>Embalagem mantém o café intacto</p>
          </div>
          <div>
            <span>
              <Timer size={16} weight="fill" color="white" />
            </span>
            <p>Entrega rápida e rastreada</p>
          </div>
          <div>
            <span>
              <Coffee size={16} weight="fill" color="white" />
            </span>
            <p>O café chega fresquinho até você</p>
          </div>
        </BannerItems>
      </BannerText>
      <img
        src={homeBanner}
        alt="Copo de café com a marca Coffee Delivery com grãos de café e café moído ao redor"
      />
    </BannerContainer>
  )
}
