import React, { useRef, useState } from 'react';

import About from './Containers/About';
import Contact from './Containers/Contact';
import Drawer from './components/Drawer';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './Containers/Home';
import Tecnologies from './Containers/Tecnologies';
import { GlobalStyles, Main } from './styles/GlobalStyles';

function App() {
  const [showDrawer, handleDrawer] = useState(false);

  const refHome = useRef();
  const refAbout = useRef();
  const refTecnologies = useRef();
  const refContact = useRef();

  const goTo = (ref: any) => {
    window.scrollTo({ top: ref.offsetTop, behavior: "smooth" });
    handleDrawer(false);
  }

  return (
    <Main>
      <GlobalStyles/>
      <Header
        onClick={() => handleDrawer(!showDrawer)}
        goToHome={() => {goTo(refHome.current)}}
        goToAbout={() => {goTo(refAbout.current)}}
        goToTecnologies={() => {goTo(refTecnologies.current)}}
        goToContact={() => {goTo(refContact.current)}}
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
      <Footer />
    </Main>
  );
}

export default App;
