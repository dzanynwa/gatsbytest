import styled from 'styled-components';

const VisitorSectionWrapper = styled.section`
  min-height: 630px;
  display: flex;
  align-items: center;
  margin-bottom: 40px;
  position: relative;
  @media only screen and (max-width: 1200px) {
    min-height: 500px;
    margin-bottom: 45px;
  }
  @media only screen and (max-width: 991px) {
    min-height: 370px;
    margin-bottom: 40px;
  }
  @media (max-width: 767px) {
    min-height: auto;
    display: block;
  }
`;

const SectionObject = styled.div`
  position: absolute;
  width: 55%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  @media (max-width: 767px) {
    width: 100%;
    position: relative;
    height: auto;
    top: auto;
    left: auto;
  }
  img {
    max-width: 93%;
    height: auto;
  }
  .objectWrapper {
    margin-right: auto;
    position: relative;
    .dashboardWrapper {
      position: absolute;
      top: 7vw;
      left: 0;
      .img{
      -webkit-box-shadow: 7px 7px 5px 1px rgba(235,235,235,1);
-moz-box-shadow: 7px 7px 5px 1px rgba(235,235,235,1);
box-shadow: 7px 7px 5px 1px rgba(235,235,235,1);}
    }
  }
`;

export { SectionObject };

export default VisitorSectionWrapper;
