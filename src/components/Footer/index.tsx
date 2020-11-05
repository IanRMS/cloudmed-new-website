import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaWhatsapp, FaYoutube } from 'react-icons/fa';

import { Container, Content, FooterSpan, IconButton, LinksContainer } from './styles';

const Footer: React.FC = () => {

  return (
    <Container>
      <Content>
        <FooterSpan>© 2020. Cloudmed Tecnologia</FooterSpan>
        <LinksContainer>
          <IconButton href="https://www.linkedin.com/company/cloudmed" hoverColor="#45abff">
            <FaLinkedinIn/>
          </IconButton>
          <IconButton href="https://www.instagram.com/cloudmedbr" hoverColor="#8f6ec7">
            <FaInstagram/>
          </IconButton>
          <IconButton href="https://www.facebook.com/cloudmedtecnologia" hoverColor="#4f62cf">
            <FaFacebookF/>
          </IconButton>
          <IconButton href="https://twitter.com/Cloud_Med" hoverColor="#29b6f6">
            <FaTwitter/>
          </IconButton>
          <IconButton href="https://www.youtube.com/user/canalcloudmed" hoverColor="#ff6055">
            <FaYoutube/>
          </IconButton>
          <IconButton href="https://wa.me/5516999883165" hoverColor="#5aca5e">
            <FaWhatsapp/>
          </IconButton>
        </LinksContainer>
      </Content>
    </Container>
  );
};

export default Footer;
