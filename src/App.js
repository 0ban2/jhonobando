import React from 'react';
import SayHello from './components/Hello';
import ReactTypingEffect from 'react-typing-effect';
import Imagen from './components/Image';
import Container from './components/Container';
import Photo from './images/jhonobando.png';

function App() {
  const name = ['Jhon Obando', 'Web developer']
  return (
    <div className="App" style={{textAlign: "center"}}>
      <Container>
          <Imagen>
            <img src={Photo} alt="Jhon Obando"/>
          </Imagen>
          <SayHello text={name}
            as={ReactTypingEffect}
            typingDelay="500"
            eraseDelay="1000"
            cursor=""
          />
      </Container>
    </div>
  );
}

export default App;
