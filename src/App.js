import React from 'react';
import SayHello from './components/Hello';
import Email from './components/Email';
import ReactTypingEffect from 'react-typing-effect';
import Imagen from './components/Image';
import Container from './components/Container';
import Photo from './images/jhonobando.png';

function App() {
  const name = ['Jhon Obando', 'Web UI developer']
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
          <Email href="mailto:hola@jhonobando.cl">hola@jhonobando.cl</Email>
      </Container>
    </div>
  );
}

export default App;
