import React, { Fragment } from 'react';
import Sticky from 'react-stickynode';
import { ThemeProvider } from 'styled-components';
import { cryptoTheme } from 'common/src/theme/crypto';
import { ResetCSS } from 'common/src/assets/css/style';
import { GlobalStyle, ContentWrapper } from '../containers/Crypto/crypto.style';
import { DrawerProvider } from 'common/src/contexts/DrawerContext';
import Navbar from '../containers/Crypto/Navbar';
import Banner from '../containers/Crypto/BannerSection';
import BannerSlider from '../containers/Crypto/BannerSlider';
import Transactions from '../containers/Crypto/Transaction';
import ControlSections from '../containers/Crypto/ControlSection';
import TrustedProofSections from '../containers/Crypto/TrustedProof';
import SlideSections from '../containers/Crypto/CryptoSlides';
import FaqSection from '../containers/Agency/FaqSection';
import Footer from '../containers/Crypto/Footer';
import SEO from '../components/seo';

export default () => {
  return (
    <ThemeProvider theme={cryptoTheme}>
      <Fragment style={{backgroundColor: '#82a9f4'}}>
        <SEO title="Smart Sales Forecasting | Save more, win more" />
        <ResetCSS />
        <GlobalStyle />
        <ContentWrapper>
          <Sticky top={0} innerZ={9999} activeClass="sticky-nav-active">
            <DrawerProvider>
              <Navbar />
            </DrawerProvider>
          </Sticky>
          <Banner />
          <Transactions />
          <ControlSections />
          <TrustedProofSections />
          {/* <ScalableSections /> */}
          <SlideSections />
          <FaqSection />
          <Footer />
        </ContentWrapper>
      </Fragment>
    </ThemeProvider>
  );
};
