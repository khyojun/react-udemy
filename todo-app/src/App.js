import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

import './components/learning-examples/LearningComponent' 
import LearningComponent from './components/learning-examples/LearningComponent';

// 중괄호 안하면 디폴트 컴포넌트로 export 됨. 그래서 특정 컴포넌트 하고 싶으면 중괄호 넣기


function App() {
  return (
    <div className="App">
      <LearningComponent/>
    </div>
  );
}






export default App;
