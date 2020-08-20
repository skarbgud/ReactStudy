import React, { Component } from 'react';

class TOC extends Component {
    shouldComponentUpdate(newProps, newState){
        console.log('======>TOC render shouldComponentUpdate'
            ,newProps.data  //바뀐 값
            ,this.props.data //현재 값
        );
        // shouldComponentUpdate 함수는 호출 되었지만 render 함수는 호출 X
        if(this.props.data === newProps.data){
            return false;
        }
        // push를 하면 원본의 값을 수정하게 되므로 바뀐 값 감지 못한다.
        return true;   //true -> render 호출 , false -> render 호출 X
    }
    render() {
        console.log('======>TOC render');
        // render 함수를 다시 호출 할지 말지 결정 할 수 있게한다.
        var lists = [];
        var data = this.props.data;
        var i = 0;
        while(i < data.length){
            lists.push(
                <li key={data[i].id}>
                    <a 
                        href={"/content/"+data[i].id}
                        // data-id={data[i].id}
                        onClick={function(id, e){
                            e.preventDefault();
                            // this.props.onChangePage(e.target.dataset.id);
                            this.props.onChangePage(id);
                        }.bind(this, data[i].id)}
                    >{data[i].title}</a>
                </li>);
            i = i + 1;
        }
        return (
            <nav>
                <ul>
                    {lists}
                </ul>
            </nav>
        );
    }
}

export default TOC;