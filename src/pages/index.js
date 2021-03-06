import React, { useState, useEffect } from 'react';

import GlobalStyleProvider from 'assets/styles/globalStyle';
import TopBarPhone from 'components/TopBarMobile';
import Background from 'components/Background';
import HeroTextPhone from 'components/HeroText';
import NavigationArrow from 'components/NavigationArrow';
import ScrollDownLineHero from 'components/ScrollDownLineHero';
import PageNumber from 'components/PageNumber';
import HeroImage from 'components/HeroImage';
import MenuDesktopButton from 'components/MenuDesktopButton';
import BeforeBackground from 'components/BeforeBackground';

import { StateOfPageContextProvider } from 'context/StateOfPageContext';

import './styles.css';

const IndexPage = () => {
  const [isLoad, setIsLoad] = useState(false);

  const isLoadedPage = () => {
    setTimeout(() => {
      if (window.isLoaded) {
        setIsLoad(true);
      } else {
        isLoadedPage();
      }
    }, 200);
  };

  useEffect(() => {
    isLoadedPage();
  }, []);

  if (isLoad) {
    return (
      <GlobalStyleProvider>
        <StateOfPageContextProvider>
          <Background>
            <TopBarPhone />
            <HeroTextPhone />
            <NavigationArrow />
            <ScrollDownLineHero />
            <PageNumber />
            <HeroImage />
            <MenuDesktopButton />
          </Background>
        </StateOfPageContextProvider>
      </GlobalStyleProvider>
    );
  }

  return (
    <GlobalStyleProvider>
      <BeforeBackground />
    </GlobalStyleProvider>
  );
};
export default IndexPage;
