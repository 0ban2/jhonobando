import styled from 'styled-components'
import jo from '../images/jo.png'

const Container = styled.section`
    min-height: 100vh;
    min-width: 100vw;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    background: linear-gradient(0deg, rgba(7,122,107,1) 0%, rgba(61,138,8,1) 100%);
    justify-content: center;
    align-items: center;
    position: relative;
    >*{
        position: relative;
    }
    &:before{
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        background-image: url(${jo});
        background-repeat: no-repeat;
        height: 100%;
        opacity: .0777;
        max-width: 50%;
        @media (max-width: 500px) {
            background-size: contain;
        }
    }
`

export default Container