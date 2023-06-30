import styled from 'styled-components'

export const SuccessContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding: 5rem 0;

  h2 {
    width: 100%;
    color: ${(props) => props.theme['yellow-dark']};
    font-family: 'Baloo 2', cursive;
    font-size: 2rem;
    line-height: 130%;
    font-weight: 800;
  }
  p {
    width: 100%;
    color: ${(props) => props.theme['base-subtitle']};
    font-size: 1.25rem;
    line-height: 130%;
    font-weight: 400;
  }
`

export const InfoContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 2rem 0;
  padding: 2.25rem;
  gap: 2rem;
  width: calc(100% - 6rem - 492px);
  background: linear-gradient(white, white) padding-box,
    linear-gradient(
        to right,
        ${(props) => props.theme.yellow},
        ${(props) => props.theme.purple}
      )
      border-box;
  border-radius: 6px 36px 6px 36px;
  border: 1px solid transparent;

  > div {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    height: 2.75rem;
    gap: 0.75rem;

    span {
      display: flex;
      width: 2rem;
      height: 2rem;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      background-color: ${(props) => props.theme.purple};

      svg {
        color: ${(props) => props.theme.white};
      }
    }

    p {
      color: ${(props) => props.theme['base-text']};
      font-size: 1rem;
      line-height: 130%;
      font-weight: 400;
    }

    strong {
      color: ${(props) => props.theme['base-text']};
      font-size: 1rem;
      line-height: 130%;
      font-weight: 600;
    }
  }
`
