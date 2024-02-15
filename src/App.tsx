import React,{ useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <header className="App-header">
    <LikeButton />
  </header>
  );
}

function LikeButton() {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
  };

  return <span className="likeButton" onClick={handleClick}>♥{count}</span>;
}

export default App;
