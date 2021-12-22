import React from 'react';
import Input from './components/Input/Input';
import Button from './components/Button/Button';
import Logo from './components/Logo/Logo';
import password from './img/ver.png';
import './css/style.css';

const App = () => {
  return (
    <div>
      <div className="container">
        <div className="content">
          <Logo />
          <form action="">
            <h3>Faça seu Login</h3>
            <Input placeholder="E-mail" type="text" />
            <br></br>
            <div>
              <Input id="pass" placeholder="Senha" type="password" />
              <img src={password} className="passwordIcon" alt="password" />
            </div>
            <br></br>
            <Button text="Entrar" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default App;
