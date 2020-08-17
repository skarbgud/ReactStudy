// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// 함수형 방식(function type)
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// 클래스형 방식(class type)
import React, { Component } from 'react';
import './App.css';
import TOC from './components/TOC';
import Content from './components/Content';
import Subject from './components/Subject';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      subject:{title:'WEB', sub:"World Wide Web!"}
    }
  }
  render() {
    return (
      <div className="App">
        {/* 컴포넌트의 이름에만 집중해서 복잡도를 낮춘다. */}
        <Subject 
          title={this.state.subject.title} 
          sub={this.state.subject.sub}></Subject>
        <TOC></TOC>
        <Content title="HTML" desc="HTML is HyperText Markup Language."></Content>
      </div>
    );
  }
}

export default App;
