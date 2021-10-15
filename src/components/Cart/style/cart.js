import styled from 'styled-components/macro';

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const Content = styled.p`
  width: 100%;
  text-align: center;
  font-size: 28px;
`;

const Heading = styled.h1`
  margin-bottom: 25px;
  font-size: 40px;
  text-align: center;
  text-transform: uppercase;
`;

const Items = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 50px;
`;

const Summary = styled.div`
  padding: 20px 35px;
  background-color: #fff;
  border-radius: 5px;
  align-self: flex-start;
`;

const Title = styled.h2`
  margin-bottom: 20px;
  font-size: 28px;
`;

const Count = styled.div`
  text-transform: uppercase;
  font-size: 20px;
`;

const Number = styled.span`
  font-weight: 700;
`;

export { Container, Content, Heading, Items, Summary, Title, Count, Number };
