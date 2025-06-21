import styled from "styled-components";
import tiktok from '../../assets/Logos/tiktok.png';
import youtube from '../../assets/Logos/youtube.png';

const compara = (props) => 
{
    switch(props.$rede){
        case 'tiktok':
            return tiktok
            break;
        case 'youtube':
            return  youtube
            break;
        default:
            console.log('Rede social não encontrado');
    }
}

const DivBotao = styled.div`
    width: 400px;
    background-color: rgb(255, 255, 255, 0.1);
    border: solid 1px;
    border-color: #FFFFFF;
    border-radius: 10px;
    margin: 1em 2em;
    :hover{
        background-color: rgb(255, 255, 255, 0.2);
    }
    @media screen and (max-width: 430px){
        width: 340px;
    }
    @media screen and (max-width: 370px){
        width: 310px;
    }
`;

const BotaoEstilizado = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    background: url(${props => compara(props)}) no-repeat;
    background-position: 1em;
    :hover{
    background-color: transparent;
    }

`;
const Paragrafo = styled.p`
    background-color: transparent;
    color: #FFFFFF;
    font-size: 20;
    font-weight: 700;    
`;
const Botao = ({ rede, link, children }) => 
{
    
    return(
            <DivBotao $rede={rede} href={link}>
                <BotaoEstilizado $rede={rede} href={link}>
                    <Paragrafo $rede={rede}> {children} </Paragrafo>
                </BotaoEstilizado>
            </DivBotao>
    )
}

export default Botao;