import { HeaderContainer } from './styles'
import logoImg from '../../assets/logo.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { NavLink, Link } from 'react-router-dom'

export function Header() {
  return (
    <HeaderContainer>
      <Link to="/">
        <img src={logoImg} alt="" />
      </Link>
      <nav>
        <NavLink to="/">
          {/* Apliacar API de geolocalização - Remover NavLink */}
          <MapPin size={22} weight="fill" />
          Location
        </NavLink>
        <NavLink to="/checkout">
          <ShoppingCart size={22} weight="fill" />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
