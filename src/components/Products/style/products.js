import styled from 'styled-components/macro';

const Title = styled.h1`
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
  font-size: 40px;
  text-align: center;
  text-transform: uppercase;

  @media (max-width: 767px) {
    font-size: 30px;
  }

  ::before,
  ::after {
    content: '';
    height: 15px;
    align-self: flex-end;
    flex: 1 1 0;
    border-top: 1px solid #000;

    @media (max-width: 767px) {
      height: 10px;
    }

    @media (max-width: 424px) {
      display: none;
    }
  }

  ::before {
    margin-right: 30px;

    @media (max-width: 767px) {
      margin-right: 10px;
    }
  }

  ::after {
    margin-left: 30px;

    @media (max-width: 767px) {
      margin-left: 10px;
    }
  }

  span {

    ::before,
    ::after {
      font-size: 30px;
      letter-spacing: -3px;

      @media (max-width: 767px) {
        font-size: 22px;
      }
    }

    ::before {
      content: ">>>>>>";
      margin-right: 12px;

      @media (max-width: 767px) {
        content: ">>>>";
        margin-right: 7px;
      }

    }
  
    ::after {
      content: "<<<<<<";
      margin-left: 10px;

      @media (max-width: 767px) {
        content: "<<<<";
        margin-left: 5px;
      }
    }
  }

`;

const ProductsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  width: calc(100% + 35px);
  margin-bottom: -35px;

  @media (max-width: 1179px) {
    width: calc(100% + 20px);
    margin-bottom: -20px;
  }

  @media (max-width: 767px) {
    width: 100%;
  }
`;

export { ProductsList, Title };
