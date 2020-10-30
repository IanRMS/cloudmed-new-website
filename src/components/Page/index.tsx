import React, { useState } from 'react';
import About from '../../Containers/About';
import Contact from '../../Containers/Contact';
import Home from '../../Containers/Home';
import Tecnologies from '../../Containers/Tecnologies';
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
      <Tecnologies/>
      <Contact/>
    </Container>
  );
};

export default Page;
