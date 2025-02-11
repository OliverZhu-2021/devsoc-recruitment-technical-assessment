import './App.css'
import styled from 'styled-components';
import Header from './header/header';
import Body from './body/body';

const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  position: relative;
`;

function App() {

  return (
    <Container>
      <Header />
      <Body />
    </Container>
  )
}

export default App
