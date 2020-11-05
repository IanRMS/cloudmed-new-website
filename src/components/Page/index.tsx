import React, { useRef, useState } from 'react';
import About from '../../Containers/About';
import Contact from '../../Containers/Contact';
import Drawer from '../Drawer';
import Footer from '../Footer';
import Header from '../Header';
import Home from '../../Containers/Home';
import Tecnologies from '../../Containers/Tecnologies';
import SupportFab from '../Fab';

import { Container } from './styles';

const Page: React.FC = () => {
  const [showDrawer, handleDrawer] = useState(false);

  const refHome = useRef();
  const refAbout = useRef();
  const refTecnologies = useRef();
  const refContact = useRef();

  const goTo = (ref: any) => {
    console.log('REF', ref.offsetTop);
    window.scrollTo({ top: ref.offsetTop, behavior: "smooth" });
  }

  return (
    <Container>
      <Header
        onClick={() => handleDrawer(!showDrawer)}
        goToHome={() => goTo(refHome.current)}
        goToAbout={() => goTo(refAbout.current)}
        goToTecnologies={() => goTo(refTecnologies.current)}
        goToContact={() => goTo(refContact.current)}
      />
      <Drawer
        show={showDrawer}
        onClick={() => handleDrawer(!showDrawer)}
        goToHome={() => goTo(refHome.current)}
        goToAbout={() => goTo(refAbout.current)}
        goToTecnologies={() => goTo(refTecnologies.current)}
        goToContact={() => goTo(refContact.current)}
      />
      <Home forwardRef={refHome}/>
      <About forwardRef={refAbout}/>
      <Tecnologies forwardRef={refTecnologies}/>
      <Contact forwardRef={refContact}/>
      <SupportFab />
      <Footer/>
    </Container>
  );
};

export default Page;
