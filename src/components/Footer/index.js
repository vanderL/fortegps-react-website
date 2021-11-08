import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { 
    FooterContainer, 
    FooterWrap, 
    FooterLinksContainer, 
    FooterLinksWrapper,
    FooterLinkItems,
    FooterLinkTitle,
    FooterLink, 
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    WebsiteRights,
    SocialIcons,
    SocialIconLink
} from "./styles"

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle> Sobre Nós</FooterLinkTitle>
                            <FooterLink to='/'>Nosso Trabalho</FooterLink>
                            <FooterLink to='/'>Resultados</FooterLink>
                            <FooterLink to='/'>Nossas Vagas</FooterLink>
                            <FooterLink to='/'>Termo de Serviço</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle> Dicas </FooterLinkTitle>
                            <FooterLink to='/'>Nosso Trabalho</FooterLink>
                            <FooterLink to='/'>Resultados</FooterLink>
                            <FooterLink to='/'>Nossas Vagas</FooterLink>
                            <FooterLink to='/'>Termo de Serviço</FooterLink>
                        </FooterLinkItems>                      
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle> Social Media </FooterLinkTitle>
                            <FooterLink to='/'>Instagram</FooterLink>
                            <FooterLink to='/'>Facebook</FooterLink>
                            <FooterLink to='/'>Linkedin</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle> Contatos </FooterLinkTitle>
                            <FooterLink href='https://api.whatsapp.com/send?phone=5585994038884&text=Ol%C3%A1%2C%20tenho%20interesse%20no%20rastreamento%20veicular.'>Suporte</FooterLink>
                            <FooterLink href='https://api.whatsapp.com/send?phone=5585994038884&text=Ol%C3%A1%2C%20tenho%20interesse%20no%20rastreamento%20veicular.'>Financeiro</FooterLink>
                            <FooterLink href='https://api.whatsapp.com/send?phone=5585994038884&text=Ol%C3%A1%2C%20tenho%20interesse%20no%20rastreamento%20veicular.'>Cobrança</FooterLink>
                            <FooterLink href='https://api.whatsapp.com/send?phone=5585994038884&text=Ol%C3%A1%2C%20tenho%20interesse%20no%20rastreamento%20veicular.'>Atendimento</FooterLink>
                        </FooterLinkItems>                      
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo>
                            ForteGPS
                        </SocialLogo>
                        <WebsiteRights> 
                            ForteGPS - {new Date().getFullYear()}
                        </WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href="https://www.facebook.com/FORTEGPS" target="_blank" aria-label="Facebook">
                                <FaFacebook />
                            </SocialIconLink>
                            <SocialIconLink href="https://www.instagram.com/fortegpsrast" target="_blank" aria-label="Instagram">
                                <FaInstagram />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Linkedin">
                                <FaLinkedin />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )   
}

export default Footer;
