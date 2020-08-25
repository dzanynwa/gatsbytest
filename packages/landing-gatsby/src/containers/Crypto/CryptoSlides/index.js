import React from 'react';
import PropTypes from 'prop-types';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import Box from 'reusecore/src/elements/Box';
import Text from 'reusecore/src/elements/Text';
import Heading from 'reusecore/src/elements/Heading';
import FeatureBlock from 'common/src/components/FeatureBlock';
import Container from 'common/src/components/UI/Container';
import { FeatureSliderWrapper } from './cryptoSlides.style';
import Image1 from 'common/src/assets/image/crypto/forecast1.png';
import Image2 from 'common/src/assets/image/crypto/forecast2.png';
import Image3 from 'common/src/assets/image/crypto/forecast3.png';
const images = [
  {
    original: `${Image1}`,
    originalAlt: 'slide one',
  },
  {
    original: `${Image2}`,
    originalAlt: 'slide two',
  },
  {
    original: `${Image3}`,
    originalAlt: 'slide three',
  },
];

const FeatureSlider = ({ row, title, description, sectionSubTitle }) => {
  return (
    <FeatureSliderWrapper id="featureslider">
      <Container noGutter mobileGutter>
        <Box className="row" {...row}>
          <FeatureBlock
            title={
              <Heading
                content="Sophisticated Solution for Sales Forecasting"
                {...title}
              />
            }
            description={
              <Text
                content="Easily forecast the sales of your business while keeping tracks of the inventory"
                {...description}
              />
            }
          />
        </Box>
        <Box className="FeatureSlider">
          <ImageGallery
            items={images}
            className="Slider-img"
            showPlayButton={false}
            showFullscreenButton={false}
            showNav={false}
            showBullets={true}
            autoPlay={true}
          />
        </Box>
      </Container>
    </FeatureSliderWrapper>
  );
};

// Transactions style props
FeatureSlider.propTypes = {
  sectionHeader: PropTypes.object,
  sectionTitle: PropTypes.object,
  sectionSubTitle: PropTypes.object,
  row: PropTypes.object,
};

// Trusted default style
FeatureSlider.defaultProps = {
  // Trusted section row default style
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    flexDirection: 'column',
    alignSelf: 'center',
    justifyContent: 'center',
    ml: '-15px',
    mr: '-15px',
  },
  title: {
    fontSize: ['24px', '26px', '30px', '36px', '40px'],
    lineHeight: ['30px', '32px', '40px', '50px', '55px'],
    fontWeight: '700',
    color: '#32325d',
    letterSpacing: '-0.010em',
    mb: '20px',
    textAlign: 'center',
  },
  description: {
    fontSize: '16px',
    fontWeight: '400',
    color: '#525f7f',
    lineHeight: '28px',
    mb: ['25px', '25px', '30px', '30px', '45px'],
    textAlign: 'center',
  },
  sectionSubTitle: {
    as: 'span',
    fontSize: ['16px', '16px', '18px', '20px', '20px'],
    fontFamily: 'Poppins',
    fontWeight: '600',
    lineHeight: '27px',
    color: '#525f7f',
    textAlign: 'center',
  },
};

export default FeatureSlider;
