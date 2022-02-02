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

                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle> Social Media </FooterLinkTitle>
                            <FooterLink href="https://www.instagram.com/fortegpsrast" target="_blank" aria-label="Instagram">Instagram</FooterLink>
                            <FooterLink href="https://www.facebook.com/FORTEGPS" target="_blank" aria-label="Facebook">Facebook</FooterLink>
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
