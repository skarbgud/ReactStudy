import React, { Component } from 'react';
import './App.css';
import TOC from './components/TOC';
import ReadContent from './components/ReadContent';
import CreateContent from './components/CreateContent';
import Subject from './components/Subject';
import Control from './components/Control';
import UpdateContent from './components/UpdateContent';

class App extends Component {
  constructor(props){
    super(props);
    this.max_content_id = 3;
    this.state = {
      mode:'create',
      selected_content_id:2,
      subject:{title:'WEB', sub:"World Wide Web!"},
      welcome:{title:'Welcome', desc:'Hello, React!!'},
      contents:[
        {id:1, title:'HTML', desc:'HTML is information'},
        {id:2, title:'CSS', desc:'CSS is for design'},
        {id:3, title:'JavaScript', desc:'JavaScript is for interactive'},
      ]
    } 
  }
  getReadContent(){
    var i = 0;
    while(i < this.state.contents.length){
      var data = this.state.contents[i];
      if(data.id === this.state.selected_content_id) {
        return data;
      }
      i = i + 1;
    }
  }
  getContent(){
    var _title, _desc, _article = null;
    if(this.state.mode === 'welcome'){
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
      _article = <ReadContent title={_title} desc={_desc}></ReadContent>
    } else if(this.state.mode === 'read'){
      var _content = this.getReadContent();
      _article = <ReadContent title={_content.title} desc={_content.desc}></ReadContent>
    } else if(this.state.mode === 'create'){
      _article = <CreateContent onSubmit={function(_title, _desc){
        // add content to this.state.contents
        this.max_content_id = this.max_content_id + 1;
        // this.state.contents.push( // push 는 원본을 바꾸지만 concat은 원본을 바꾸지 않고 새로운 배열 리턴한다.
        //   {id:this.max_content_id, title:_title, desc:_desc}
        // );
        // var _contents = this.state.contents.concat(
        //   {id:this.max_content_id, title:_title, desc:_desc}
        // )
      
        //객체일때는 Object.assign({},원본객체);
        var newContents = Array.from(this.state.contents);
        newContents.push(
            {id:this.max_content_id, title:_title, desc:_desc}
        )
        this.setState({
          contents:newContents
        });
        console.log(_title,_desc);
      }.bind(this)}></CreateContent>
    } else if(this.state.mode === 'update'){
      _content = this.getReadContent();
      _article = <UpdateContent data={_content} onSubmit={function(_title, _desc){
        // add content to this.state.contents
        this.max_content_id = this.max_content_id + 1;
       
        var _contents = this.state.contents.concat(
          {id:this.max_content_id, title:_title, desc:_desc}
        )
        this.setState({
          contents:_contents
        });
        console.log(_title,_desc);
      }.bind(this)}></UpdateContent>
    }
    return _article;
  }
  render() {
    console.log('App render');
    return (
      <div className="App">
        {/* 컴포넌트의 이름에만 집중해서 복잡도를 낮춘다. */}
        <Subject 
          title={this.state.subject.title} 
          sub={this.state.subject.sub}
          onChangePage={function(){
            this.setState({mode:'welcome'});
          }.bind(this)}
        ></Subject>
        <TOC 
          onChangePage={function(id){
            this.setState({
              mode:'read',
              selected_content_id:Number(id),
            });
          }.bind(this)} 
          data={this.state.contents}
        ></TOC>
        <Control onChangeMode={function(_mode){
          this.setState({
            mode:_mode,
          });
        }.bind(this)}></Control>
        {this.getContent()}
      </div>
    );
  }
}

export default App;
