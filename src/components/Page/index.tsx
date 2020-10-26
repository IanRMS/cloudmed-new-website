import React, { useState } from 'react';
import About from '../../Containers/About';
import Home from '../../Containers/Home';
import Drawer from '../Drawer';
import Header from '../Header';

import { Container } from './styles';

const Page: React.FC = () => {
  const [showDrawer, handleDrawer] = useState(false);
  return (
    <Container>
      <Header onClick={() => handleDrawer(!showDrawer)}/>
      <Drawer show={showDrawer} onClick={() => handleDrawer(!showDrawer)}/>
      <Home/>
      <About/>
    </Container>
  );
};

export default Page;
