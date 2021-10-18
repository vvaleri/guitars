import styled from 'styled-components/macro';

const Container = styled.div`
  display: flex;
  justify-content: center;

  @media (max-width: 767px) {
    flex-direction: column;
  }
`;

const Content = styled.p`
  width: 100%;
  text-align: center;
  font-size: 28px;
`;

const Heading = styled.h1`
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

const Items = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 50px;

  @media (max-width: 1024px) {
    margin-right: 30px;
  }

  @media (max-width: 767px) {
    margin-right: 0;
  }
`;

const Summary = styled.div`
  padding: 20px 35px;
  background-color: #fff;
  border-radius: 5px;
  align-self: flex-start;

  @media (max-width: 1024px) {
    padding-left: 20px;
    padding-right: 20px;
  }

  @media (max-width: 767px) {
    align-self: stretch;
    text-align: center;
  }
`;

const Title = styled.h2`
  margin-bottom: 20px;
  font-size: 28px;

  @media (max-width: 1024px) {
    font-size: 26px;
  }

  @media (max-width: 767px) {
    margin-bottom: 10px;
  }
`;

const Count = styled.div`
  text-transform: uppercase;
  font-size: 20px;
`;

const Number = styled.span`
  font-weight: 700;
`;

export { Container, Content, Heading, Items, Summary, Title, Count, Number };
