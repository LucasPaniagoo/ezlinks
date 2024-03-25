import styled from "styled-components";
import Logo from './Logo.png';

const HeaderEstilizado = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 5em 0em;
    img{
        width: 130px;
    }
    h1{
        font-size: 24px;
        font-weight: 700;
    }
    @media screen and (max-width: 430px){
        margin: 3em 0em;
        img{
            width: 100px;
        }
        h1{
            font-size: 20px;
        }
    }
`

const Header = () => 
{
    return(
        <HeaderEstilizado>
            <img src={Logo} alt="Logo do canal" />
            <h1>Omen Duelista</h1>
        </HeaderEstilizado>
    )
}

export default Header;