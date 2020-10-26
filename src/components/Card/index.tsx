import React from 'react';
import {FaAngleDown} from 'react-icons/fa';

import { Image, Container, Text, Button } from './styles';

interface Props {
  text:string;
  img: string | undefined;
}

const Card: React.FC<Props> = ({text, img = ''}) => {
  return (
    <Container>
      <Image alt="" src={img}/>
      <Text>{text}</Text>
      <Button>
      <FaAngleDown color="#F9B43A" size="2.5em"/>
      </Button>
    </Container>
  );
};

export default Card;
