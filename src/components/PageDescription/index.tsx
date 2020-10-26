import React from 'react';

import { Text } from './styles';

interface Props {
  text: string;
}

const PageDescription: React.FC<Props> = ({text: string}) => {
  return (
    <Text>
      {string}
    </Text>
  );
};

export default PageDescription;
