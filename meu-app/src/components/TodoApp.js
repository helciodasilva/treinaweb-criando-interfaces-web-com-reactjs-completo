import React from 'react';
import MyList from './MyList';
import TodoStore from '../stores/TodoStore';
import TodoActions from '../actions/TodoActions';

function getTodoState(){
    return{
        items: TodoStore.getAll()
    }
}

class TodoApp extends React.Component{

    state = getTodoState();

    _onChange = ()=>{
        this.setState(getTodoState());
    }

    componentDidMount = ()=>{
        TodoStore.addChangeListener(this._onChange);
    }

    componentWillUnmount = ()=>{
        TodoStore.removeChangeListener(this._onChange);
    }

    render(){
        var props = this.props;

        return(
            <div>
                <MyList items={this.state.items} onInsert={TodoActions.create} />
            </div>
        );

    }
}

export default TodoApp;