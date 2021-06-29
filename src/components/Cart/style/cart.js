import styled from 'styled-components/macro';

const Main = styled.main``;

const MainTitle = styled.h1``;

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Summary = styled.div`
  padding: 15px 20px;
  background-color: #fff;
  border-radius: 5px;
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

export { Main, MainTitle, Container, Summary, Title, Count, Number };
