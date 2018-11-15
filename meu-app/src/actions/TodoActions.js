import AppDispatcher from '../dispatcher/AppDispatcher';
import TodoConstants from '../constants/TodoConstants';

const TodoActions = {
    create: (text)=>{
        AppDispatcher.dispatch({
            actionType: TodoConstants.TODO_CREATE,
            text
        });
    }
}

export default TodoActions;