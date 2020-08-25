import styled from 'styled-components';
import { themeGet } from 'styled-system';
import BannerBG from 'common/src/assets/image/appClassic/banner3.png';
import BannerBGMobile from 'common/src/assets/image/appClassic/bannerMobile.png';

const BannerWrapper = styled.div`
  padding-top: 100px;
  padding-bottom: 30%;
  margin-top: -60px;
  background-image: url(${BannerBG});
  background-size: cover;
  background-position: top center;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 1440px) {
    padding-bottom: 405px;
  }
  @media (max-width: 990px) {
    text-align: center;
  }
  @media (max-width: 770px) {
    padding-top: 50px;
    padding-bottom: 110px;
    background-image: url(${BannerBGMobile});
    background-color: #d9eaf0;
  }
  > div.container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-height: calc(802px - 100px);
    @media only screen and (min-width: 1201px) and (max-width: 1440px) {
      min-height: calc(100vh - 100px);
    }
    @media only screen and (max-width: 480px) {
      flex-wrap: wrap;
    }
  }
`;

export const BannerContent = styled.div`
  max-width: 425px;
  width: 100%;
  @media only screen and (max-width: 991px) {
    flex-shrink: 0;
    max-width: 360px;
  }

  h1 {
    font-size: 46px;
    line-height: 55px;
    font-weight: 700;
    color: ${themeGet('colors.menu', '#0D233E')};
    margin-bottom: 24px;
    @media only screen and (max-width: 1366px) {
      font-size: 32px;
      line-height: 42px;
      margin-bottom: 20px;
    }
  }

  p {
    color: #6d7279;
    font-size: 16px;
    line-height: 29px;
  }
`;

export const RatingInfo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 22px;
  color: ${themeGet('colors.menu', '#0D233E')};

  .rating {
    margin-right: 10px;
    .star {
      color: ${themeGet('colors.yellow', '#FFA740')};
    }
    .star-o {
      color: #e8e8e8;
    }
  }

  img {
    margin-left: 9px;
  }
`;

export const BannerImage = styled.div`
  flex-shrink: 0;
  align-self: flex-end;
  @media only screen and (max-width: 480px) {
    margin-top: 40px;
    img {
      max-width: 70%;
    }
  }
`;

export const ButtonGroup = styled.div`
  margin-top: 35px;

  .reusecore__button {
    text-transform: inherit;
    border-radius: 5px;
    padding-left: 16px;
    padding-right: 16px;

    &.primary {
      &:hover {
        background-color: ${themeGet('colors.primaryHover', '#3C74FF')};
      }
    }

    &.text {
      .btn-icon {
        svg {
          width: auto;
          height: 25px;
        }
      }
      &:hover {
        color: ${themeGet('colors.primaryHover', '#3C74FF')};
      }
    }
  }
`;

export default BannerWrapper;
