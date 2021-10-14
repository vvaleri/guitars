import styled from 'styled-components/macro';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
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
`;

const Summary = styled.div`
  padding: 15px 20px;
  background-color: #fff;
  border-radius: 5px;
  align-self: flex-start;
`;

const Title = styled.h2`
  margin-bottom: 20px;
  font-size: 20px;
`;

const Count = styled.div`
  text-transform: uppercase;
`;

const Number = styled.span`
  font-weight: 700;
`;

export { Container, Heading, Items, Summary, Title, Count, Number };
