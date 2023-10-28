import React, { createContext } from 'react';
import './App.css';

// 4 - importando componente
import MyComponent from './components/MyComponent';
import SecondComponent from './components/SecondComponent';
import Destructuring, { Category } from './components/Destructuring';
import State, { DiaDaSemana } from './components/State';
import Context from './components/Context';

type textOrNull = string | null
type objectOrNumber = object | number
type fixed = 'Isso' | 'Ou' | 'Aquilo'

// context interface
interface AppContext{
  language: string,
  framework: string,
  projects: number
}

export const AppContext = createContext<AppContext | null>(null)

function App() {
  // 1 - variáveis
  const name: String = 'Matheus';
  const page: Number = 30;

  // 2 - functions
  const userGreeting = (name: String): string => {
    return `Olá, ${name}!`
  }

  // types
  const myText: textOrNull = 'Tem algum texto aqui'
  const testingFixed: fixed = 'Isso'

  // context
  const contextValue = {
    language: 'JavaScript',
    framework: 'Express',
    projects: 5
  }

  return (
    <AppContext.Provider value={contextValue}>
      <div className="App">
        <h1>Typescript com React</h1>
        <h3>Seu nome é {name}</h3>
        <>Página {page}</>
        <p>{userGreeting(name)}</p>
        <MyComponent />
        <SecondComponent name="Segundo" />
        <Destructuring category={Category.TS} title="Primeiro post" content="Algum conteúdo" commentsQty={10} tags={['ts', 'js']} />
        <State weekDay={DiaDaSemana.SEG} />
        <Context />
      </div>
    </AppContext.Provider>
   
  );
}

export default App;
