import React from 'react';
import PropTypes from 'prop-types';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import Box from 'reusecore/src/elements/Box';
import Text from 'reusecore/src/elements/Text';
import Heading from 'reusecore/src/elements/Heading';
import Button from 'reusecore/src/elements/Button';
import Card from 'reusecore/src/elements/Card';
import Image from 'reusecore/src/elements/Image';
import FeatureBlock from 'common/src/components/FeatureBlock';
import Container from 'common/src/components/UI/Container';
import VisitorSectionWrapper, { SectionObject } from './visitor.style';

import ImageOne from 'common/src/assets/image/appclassic/portal2.png';
import ImageBg from 'common/src/assets/image/saas/visitor_bg.png';

const VisitorSection = ({
  title,
  description,
  textArea,
  imageWrapper,
  btnStyle,
}) => {
  return (
    <VisitorSectionWrapper id="visitorSection">
      <SectionObject>
        <Card className="objectWrapper" {...imageWrapper}>
          <Zoom>
            <Image src={ImageBg} alt="BgImage" />
          </Zoom>
          <Card className="dashboardWrapper" {...imageWrapper}>
            <Fade left>
              <Image className="img" src={ImageOne} alt="VisitorDashboard1" />
            </Fade>
          </Card>
        </Card>
      </SectionObject>
      <Container>
        <Box {...textArea}>
          <FeatureBlock
            title={
              <Heading
                content="Take Your Business Online with SmartCommerce"
                {...title}
              />
            }
            description={
              <Text
                content="Experts predict that ecommerce sales will reach $4.13 trillion in 2020. The possibilities of adding an e-commerce solutions to your business are endless, and can truly propel your business to the next level. Explore the possibilities of SmartCommerce, and grow your business even more. "
                {...description}
              />
            }
            button={
              <a href="#1">
                <Button title="CONTACT US" {...btnStyle} />
              </a>
            }
          />
        </Box>
      </Container>
    </VisitorSectionWrapper>
  );
};

VisitorSection.propTypes = {
  title: PropTypes.object,
  description: PropTypes.object,
  btnStyle: PropTypes.object,
};

VisitorSection.defaultProps = {
  textArea: {
    width: ['100%', '100%', '45%'],
    ml: [0, 0, '58%'],
  },
  imageWrapper: {
    boxShadow: 'none',
  },
  title: {
    fontSize: ['20px', '26px', '26px', '36px', '48px'],
    fontWeight: '400',
    color: '#0f2137',
    letterSpacing: '-0.010em',
    mb: '20px',
    maxWidth: ['100%', '100%', '100%', '440px', '440px'],
    lineHeight: '1.5',
  },
  description: {
    fontSize: '16px',
    color: '#343d48cc',
    lineHeight: '1.75',
    mb: '33px',
    maxWidth: ['100%', '100%', '100%', '440px', '440px'],
  },
  btnStyle: {
    minWidth: '156px',
    fontSize: '14px',
    fontWeight: '500',
    color: '#fff',
    borderRadius: '4px',
    pl: '22px',
    pr: '22px',
    colors: 'primaryWithBg',
  },
};

export default VisitorSection;
