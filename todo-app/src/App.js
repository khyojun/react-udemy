import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import FirstComponent from './components/learning-examples/FirstComponent'


function App() {
  return (
    <div className="App">
      <FirstComponent/>
      <SecondComponent/>
      <ThirdComponent/>
      <ForthComponent/>
    </div>
  );
}


// 함수 컴포넌트들
function SecondComponent(){
  return (
      <div className='SecondComponent'>Second Component</div>


  )

}


// 클래스 컴포넌트들

class ThirdComponent extends Component{

  render(){
    return (
      <div className='ThirdComponent'>Third Component</div>
    )
  }


}

class ForthComponent extends Component{

  render(){
    return (
      <div className='ForthComponent'>Forth Component</div>
    )
  }


}


export default App;
