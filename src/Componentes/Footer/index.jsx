import Linkedin from '../../assets/Logos/linkedin.png';
import Github from '../../assets/Logos/github.png';
import styled from 'styled-components';

const Logos = 
{
    "github":{
        logo: Github,
        alt: 'Logo do Github'
    },
    "linkedin":{
        logo: Linkedin,
        alt: 'Logo do LinkedIn'
    }
}
const FooterEstilizado = styled.footer`
    background-color: #0B0A26;
    display: block;
    text-align: center;
    align-items: center;
    position: fixed;
    bottom: 0;
    width: 100%;
    padding: 1em 0;
    p{
        font-size: 16;
        font-weight: 700;
        margin: 0;
    }
    div{
        margin-top: 10px                               ;
    }
    @media screen and (max-width: 420px){
        padding: 0.5em 0;
        p{
        font-size: 14px;
        }
        div>img{
            width: 25px;
        }
       
    }
`
const Footer = () => 
{
    return(
        <FooterEstilizado>
            <p>Desenvolvido por Lucas Paniago</p>
            <div>
                <img src={Logos.github.logo} alt={Logos.github.alt} />
                <img src={Logos.linkedin.logo} alt={Logos.linkedin.alt} />
            </div>
        </FooterEstilizado>
    )
}

export default Footer;