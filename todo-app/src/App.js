import './App.css';

import TodoApp from './components/todo/TodoApp'; 

// 중괄호 안하면 디폴트 컴포넌트로 export 됨. 그래서 특정 컴포넌트 하고 싶으면 중괄호 넣기


function App() {
  return (
    <div className="App">
      <TodoApp/>

    </div>
  );
}






export default App;
