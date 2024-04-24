import './App.css';
import Button from './Components/Buttons/Button';
import ExemploProps from './Components/ExemploProps/ExemploProps';
import Header from './Components/Header/Header';
import Logo from './Components/Logo/Logo';
import Section from './Components/Section/Section';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Section>Container section 01</Section>
      <Logo/>
      <Section>Container section 01</Section>
      <ExemploProps nome="Liris" />
      <ExemploProps nome="Liam" />
      <ExemploProps nome="Isabel" />
      <Button action="Salvar" size="p"/>
      <Button action="Cancelar" size="m"/>
      <Button action="Modificar" size="g" noAction = {true}/>
    </div>
  );
}

export default App;
