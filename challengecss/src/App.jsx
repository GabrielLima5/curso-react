import './App.css';
import CarDetails from './components/CarDetails';
import styles from './App.module.css'

function App() {
  const cars = [
    {id: 1, brand: 'Ford', model: 'Ecosport', year: 2015},
    {id: 2, brand: 'Volkswagen', model: 'Jetta', year: 2020},
    {id: 3, brand: 'Renault', model: 'Sandero', year: 2014}
  ]

  return (
    <div className="App">
      <table className={styles.table}>
          <thead>
            <tr>
              <th>Marca</th>
              <th>Modelo</th>
              <th>Ano</th>
            </tr>
          </thead>
          {cars.map(car => (
            <CarDetails key={car.id} brand={car.brand} model={car.model} year={car.year} />
          ))}
      </table>
    </div>
  );
}

export default App;
