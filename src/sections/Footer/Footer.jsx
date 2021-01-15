import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { Container, Social, SocialItem, Text } from './styles';

const media = [
  {
    name: 'facebook',
    link: 'https://www.facebook.com/fiatbr',
    icon: <FaFacebookF />,
  },
  {
    name: 'youtube',
    link: 'https://www.youtube.com/user/fiat',
    icon: <FaYoutube />,
  },
  {
    name: 'twitter',
    link: 'https://twitter.com/fiatbr',
    icon: <FaTwitter />,
  },
  {
    name: 'instagram',
    link: 'https://www.instagram.com/fiatbr/',
    icon: <FaInstagram />,
  },
];

const Footer = () => {
  return (
    <Container>
      <Social>
        {media.map((item, index) => (
          <SocialItem
            key={index}
            name={item.name}
            title={item.name}
            href={item.link}
            target="blank"
          >
            {item.icon}
          </SocialItem>
        ))}
      </Social>

      <Text>
        A disponibilidade de itens de série, opcionais e acessórios pode variar
        de acordo com a versão escolhida.
        <br />
        Verifique o Monte seu Carro. Imagens meramente ilustrativas.
      </Text>
    </Container>
  );
};

export default Footer;
