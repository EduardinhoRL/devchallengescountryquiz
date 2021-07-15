import React, {useState, useEffect} from 'react';
import Button from './components/Button'

import styled from 'styled-components'

const Container = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
`

const Quiz = styled.div`
  margin: 0 auto;
  width: 464px;
  background: #fff;
  border-radius: 24px;
  position: relative;
  padding: 32px;

  h1 {
    position: absolute;
    top: -90px;

    font: 700 36px/54px poppins;
    color: #fff;
    text-transform: uppercase;
  }
`

const WrapperButton = styled.div`
  display: grid;
  gap: 20px;
  margin: 10px 0;
`
const Question = styled.p`
  color: #2F527B;
  font: 700 24px/36px poppins;  
`

function App() {
  const [type, setType] = useState(1);

  const [country, setCountry] = useState({})

  console.log(Math.floor(Math.random() * (3 - 1) + 1));

  useEffect(() => {
    const API = () => {
      fetch('https://restcountries.eu/rest/v2/all')
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(err => console.log(err)) 
    }
    API()
    
    setType(Math.floor(Math.random() * (3 - 1) + 1));
  }, [])

  return (
    <Container>
      <Quiz>
        <h1>Country quiz</h1>
        <Question>Which country does this flag belong to?</Question>
        <WrapperButton>
          <Button>Hola</Button>
          <Button>Hola</Button>
          <Button>Hola</Button>
          <Button>Hola</Button>
        </WrapperButton>
      </Quiz>
    </Container>
  );
}

export default App;
