import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import Box from 'reusecore/src/elements/Box';
import Text from 'reusecore/src/elements/Text';
import Image from 'reusecore/src/elements/Image';
import Heading from 'reusecore/src/elements/Heading';
import Select from 'reusecore/src/elements/Select';
import Container from 'common/src/components/UI/Container';
import ContactSections from '../Contact';
import FooterWrapper, { List, ListItem, BgImageWrapper } from './footer.style';
import AppImage from 'common/src/assets/image/ride/footerapp.svg';
import PlaystoreImage from 'common/src/assets/image/ride/footerplay.svg';
import FooterBG from 'common/src/assets/image/crypto/footer-bg.svg';
import Logo from './infologo.png';

const Footer = ({ row, col, colOne, colTwo, titleStyle }) => {
  const Data = useStaticQuery(graphql`
    query {
      cryptoJson {
        menuWidget {
          id
          title
          menuItems {
            id
            text
            url
          }
        }
        Language_NAMES {
          label
          value
        }
      }
    }
  `);

  return (
    <FooterWrapper id="footerSection">
      <ContactSections />
      <BgImageWrapper>
        <Image src={FooterBG} alt="Footer background" />
      </BgImageWrapper>
      <Container noGutter mobileGutter width="1200px">
        {/* <Box className="row mainRow" {...row}>
          <Box {...colOne}>
           
          </Box>
          <Box {...colTwo}>
            {Data.cryptoJson.menuWidget.map(widget => (
              <Box className="col" {...col} key={widget.id}>
                <Heading content={widget.title} {...titleStyle} />
                <List>
                  {widget.menuItems.map(item => (
                    <ListItem key={`list__item-${item.id}`}>
                      <a className="ListItem" href={item.url}>
                        {item.text}
                      </a>
                    </ListItem>
                  ))}
                </List>
              </Box>
            ))}
          </Box>
        </Box> */}
        <div style={{textAlign:'center'}}>
          <img src={Logo} style={{width: 200}} />
            <Text
              content="Copyright 2020 InfoStudio d.o.o."
              className="copyRightText"
              
            />
        </div>
        
      </Container>
    </FooterWrapper>
  );
};

// Footer style props
Footer.propTypes = {
  row: PropTypes.object,
  col: PropTypes.object,
  colOne: PropTypes.object,
  colTwo: PropTypes.object,
  titleStyle: PropTypes.object,
  textStyle: PropTypes.object,
};

// Footer default style
Footer.defaultProps = {
  // Footer row default style
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    ml: '-4px',
    mr: '-4px',
  },
  // Footer col one style
  colOne: {
    width: ['100%', '30%', '33%', '33%'],
    mb: ['30px', 0],
    pl: ['0px', 0],
    pr: ['0px', '0px', 0],
  },
  // Footer col two style
  colTwo: {
    width: ['100%', '70%', '67%', '67%'],
    flexBox: true,
    flexWrap: 'wrap',
  },
  // Footer col default style
  col: {
    width: ['100%', 1 / 3, 1 / 3, 1 / 3],
    pl: [0, '15px'],
    pr: [0, '15px'],
    mb: ['30px', '30px'],
  },
  // widget title default style
  titleStyle: {
    color: '#FFFFFF',
    fontSize: ['15px', '16px', '16px', '18px', '18px'],
    fontWeight: '600',
    lineHeight: '1.34',
    mb: ['15px', '18px', '18px', '20px', '30px'],
    fontFamily: 'Poppins',
  },
  // Default logo size
  logoStyle: {
    width: '128px',
    mb: '15px',
  },
  // widget text default style
  textStyle: {
    color: '#FFFFFF',
    fontSize: '16px',
    mb: '12px',
    fontWeight: '600',
    fontFamily: 'Lato',
  },
};

export default Footer;
