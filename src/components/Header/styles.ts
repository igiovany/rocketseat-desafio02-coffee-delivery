import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 6.5rem;

  nav {
    display: flex;
    gap: 0.75rem;

    a {
      height: 2.375rem;

      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0.5rem;

      color: ${(props) => props.theme.purple};
      background-color: ${(props) => props.theme['purple-light']};
      border-radius: 6px;

      text-decoration: none;

      :hover {
        color: ${(props) => props.theme['purple-light']};
        background-color: ${(props) => props.theme['purple-dark']};
      }

      :last-child {
        color: ${(props) => props.theme['yellow-dark']};
        background-color: ${(props) => props.theme['yellow-light']};

        :hover {
          color: ${(props) => props.theme['yellow-light']};
          background-color: ${(props) => props.theme['yellow-dark']};
        }
      }
    }
  }
`
