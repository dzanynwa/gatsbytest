import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import Countdown from 'react-countdown-now';
import Box from 'reusecore/src/elements/Box';
import Fade from 'react-reveal/Fade';
import Image from 'reusecore/src/elements/Image';
import Text from 'reusecore/src/elements/Text';
import Heading from 'reusecore/src/elements/Heading';
import Button from 'reusecore/src/elements/Button';
import FeatureBlock from 'common/src/components/FeatureBlock';
import Container from 'common/src/components/UI/Container';
import { ControlWrapper } from './controlSection.style';
import ControlImage from 'common/src/assets/image/crypto/inventory.jpg';

const Completionist = () => (
  <span className="readMore">You are good to go!</span>
);

const renderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a complete state
    return <Completionist />;
  } else {
    // Render a countdown
    return (
      <div className="countPortion">
        <div className="countSingle">
          {days} <span className="countText">Days</span>
        </div>
        <div className="countSingle">
          {hours} <span className="countText">Hours</span>
        </div>
        <div className="countSingle">
          {minutes} <span className="countText">Minutes</span>
        </div>
        <div className="countSingle">
          {seconds} <span className="countText">Seconds</span>
        </div>
      </div>
    );
  }
};
const ControlSection = ({
  row,
  col,
  title,
  description,
  btnStyle,
  sectionSubTitle,
  cardArea,
  readMoreTitle,
}) => {
  return (
    <ControlWrapper id="control">
      <Container>
        <Box className="row" {...row}>
          <Box className="colleft" {...col} style={{ flexDirection: 'column' }}>
            <Image
              src={ControlImage}
              className="controlImage"
              alt="Control Section Image"
            />
          </Box>
          <Box className="colright" {...col} {...cardArea}>
            <Text
              content=""
              {...sectionSubTitle}
            />
            <FeatureBlock
              title={
                <Heading
                  content="Tackle the Problem of Excessive Inventory"
                  {...title}
                />
              }
              description={
                <Text
                  content="Excess inventory may force the store to sell goods at lower prices, or even worse lead to inventory write-offs, higher than needed inventory levels also increase warehousing costs. Smart Sales Forecasting helps you tackle this problem"
                  {...description}
                />
              }
            />
            <Box className="readMoreSection">
              
            </Box>
          </Box>
        </Box>
      </Container>
    </ControlWrapper>
  );
};

// Transactions style props
ControlSection.propTypes = {
  sectionHeader: PropTypes.object,
  sectionTitle: PropTypes.object,
  sectionSubTitle: PropTypes.object,
  row: PropTypes.object,
  col: PropTypes.object,
  readMoreTitle: PropTypes.object,
  btnStyle: PropTypes.object,
};

// Transactions default style
ControlSection.defaultProps = {
  // Transactions section row default style
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    ml: '-15px',
    mr: '-15px',
  },
  // Transactions section col default style
  col: {
    pr: '15px',
    pl: '15px',
    width: [1, 1 / 2, 1 / 2, 1 / 2, 1 / 2],
    flexBox: true,
    alignSelf: 'center',
  },
  // Transactions section title default style
  title: {
    fontSize: ['24px', '26px', '30px', '36px', '40px'],
    lineHeight: ['30px', '32px', '40px', '50px', '55px'],
    fontWeight: '700',
    color: '#32325d',
    letterSpacing: '-0.010em',
    mb: '20px',
    maxWidth: ['100%', '100%', '100%', '100%', '415px'],
  },
  // Transactions section description default style
  description: {
    fontSize: '16px',
    fontWeight: '400',
    color: '#525f7f',
    lineHeight: '28px',
    mb: ['30px', '30px', '35px', '35px', '45px'],
    maxWidth: ['100%', '100%', '100%', '100%', '430px'],
  },
  sectionSubTitle: {
    as: 'span',
    textAlign: 'left',
    fontSize: ['16px', '16px', '18px', '20px', '20px'],
    fontFamily: 'Poppins',
    fontWeight: '600',
    lineHeight: '27px',
    color: '#525f7f',
  },
  // Button default style
  btnStyle: {
    minWidth: '156px',
    fontSize: '14px',
    fontWeight: '500',
  },
  readMoreTitle: {
    as: 'span',
    fontSize: ['18px', '18px', '20px', '20px', '20px'],
    lineHeight: ['25px', '27px', '27px', '27px', '27px'],
    fontWeight: '500',
    color: '#32325d',
    letterSpacing: '-0.010em',
    mb: '10px',
  },
};

export default ControlSection;
