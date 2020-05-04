import styled from 'styled-components'

const Image = styled.figure`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 20px auto;
    border-radius: 50%;
    box-shadow: -1px 2px 32px -2px rgba(69,64,69,1);
    img{
        border-radius: 50%;
        max-width: 100%;
        max-width: 250px;
    }
`

export default Image