import React from 'react';
import About from '../../Containers/About';
import Home from '../../Containers/Home';

import { Container } from './styles';

const Page: React.FC = () => {
  return (
    <Container>
      <Home/>
      <About/>
    </Container>
  );
};

export default Page;
