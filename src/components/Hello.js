import styled from 'styled-components'

const Hello = styled.h1`
  text-align: center;
  font-weight: bold;
  font-size: 50px;
  color: #FFF;
  @media (max-width: 500px) {
    font-size: 28px;
  }
`
export default Hello;