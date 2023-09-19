import { FC } from 'react';
import './App.css';
import { Logo } from './components/Logo';

interface Props {
  showLogo?: boolean;
}

export const App: FC<Props> = ({ showLogo }) => {
  return (
    <div className="App">
      <header className="App-header">
        {showLogo && <Logo />}
        <p>
          Edit <code>src/App.tsx</code> and save to reload</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
