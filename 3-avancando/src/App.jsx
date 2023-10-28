import { useState } from 'react';
import './App.css';
import Killua from './assets/killua.jpg'
import ConditionalRender from './components/ConditionalRender';
import ListRender from './components/ListRender';
import ManageData from './components/ManageData';
import ShowUsername from './components/ShowUserName';
import CarDetails from './components/CarDetails';
import Fragment from './components/Fragment';
import Container from './components/Container';
import ExecuteFunction from './components/ExecuteFunction';
import Message from './components/Message';
import ChangeMessageState from './components/ChangeMessageState';
import UserDetails from './components/UserDetails';

function App() {
  const cars = [
    {id: 1, brand: 'Ferrari', color: 'Amarelo', newCar: true, km: 0},
    {id: 2, brand: 'Kia', color: 'Roxo', newCar: false, km: 250000},
    {id: 3, brand: 'Lamborghini', color: 'Verde', newCar: false, km: 4000000},
  ]

  const people = [
    {id: 1, name: 'Gabriel', age: 17, profession: 'Dev front-end'},
    {id: 2, name: 'Marcos', age: 32, profession: 'Vendedor de paçoca'},
    {id: 3, name: 'Cléber', age: 56, profession: 'Médico'}
  ]

  function showMessage(){
    console.log('Evento do componente pai!')
  }

  const [message, setMessage] = useState('')

  const handleMessage = (msg) => {
    setMessage(msg)
  }

  return (
    <div className="App">
      <h1>Avançando em React</h1>
      {/* Imagem em public */}
      <div>
        <img src="/gato.jpg" alt="Gato" />
      </div>
      <hr />

      {/* Imagem em assets */}
      <div>
        <img src={Killua} alt="Killua" />
      </div>

      <hr />

      {/* useState */}
      <ManageData />
      <hr />

      {/* Renderização de listas */}
      <ListRender />
      <hr />
      {/* Renderização condicional */}
      <ConditionalRender />
      <hr />

      {/* Props */}
      <ShowUsername name="Gabriel" />
      <hr />

      {/* Destructuring de props */}
      <CarDetails brand="VW" km={100000} color="Azul" newCar={true} />
      <hr />

      {/* Reaprovetiando componentes */}
      <CarDetails brand="Ford" km={200000} color="Preto" newCar={false} />
      <CarDetails brand="Fiat" km={450000} color="Branco" newCar={true} />
    
      <hr />
      {/* Renderização de listas + reaproveitamento */}
      {cars.map((car) => (
        <CarDetails key={car.id} brand={car.brand} km={car.km} color={car.color} newCar={car.newCar} />
      ))}

      <hr />
      {/* React Fragment */}
      <Fragment />

      <hr />
      {/* props.children */}
      <Container myValue={17}>
        <h2>Titulo container</h2>
      </Container>

      {/* Função em props */}
      <ExecuteFunction func={showMessage} />
    
      {/* State lift */}
      <Message msg={message} />
      <ChangeMessageState handleMessage={handleMessage}/>
        
      {/* Desafio Seção 3 */}
      {people.map(person => (
        <UserDetails key={person.id} name={person.name} age={person.age} profession={person.profession} />
      ))}
    </div>
  );
}

export default App;