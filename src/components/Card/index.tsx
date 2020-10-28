import React from 'react';
import {FaAngleDown} from 'react-icons/fa';

import { Image, Container, Text, Button } from './styles';

interface Props {
  text:string;
  img: string | undefined;
  onPress: () => void;
  cardId: number;
  objectId: number;
}

const Card: React.FC<Props> = ({text, img = '', onPress, cardId, objectId}) => {
  return (
    <Container cardId={cardId} objectId={objectId}>
      <Image alt="" src={img}/>
      <Text>{text}</Text>
      <Button type="button" onClick={onPress}>
      <FaAngleDown color="#F9B43A" size="2.5em"/>
      </Button>
    </Container>
  );
};

export default Card;
