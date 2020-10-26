import React from 'react';

import { Text } from './styles';

interface Props {
  text: string;
}

const Title: React.FC<Props> = ({text}) => {
  return (
    <Text>{text}</Text>
  );
};

export default Title;
