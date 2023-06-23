import styled from 'styled-components'

export const BannerContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 2rem 0;
  gap: 7rem;
`
export const BannerText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: space-between;
  gap: 1rem;

  h1 {
    font-family: 'Baloo 2', cursive;
    font-size: 3rem;
    font-weight: extrabold;
    color: ${(props) => props.theme['base-title']};
    line-height: 130%;
  }

  p {
    font-size: 1.25rem;
    line-height: 130%;
    font-weight: normal;
  }
`
export const BannerItems = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  line-height: 130%;
  font-weight: normal;

  div {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 57%;
    margin: 0.5rem 0;
    gap: 0.25rem;
    font-size: 0.2rem;

    :nth-child(2n + 1) {
      width: 43%;
    }

    span {
      width: 2rem;
      height: 2rem;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: ${(props) => props.theme['yellow-dark']};
      border-radius: 50%;
    }

    p {
      font-size: 1rem;
    }
  }
`
