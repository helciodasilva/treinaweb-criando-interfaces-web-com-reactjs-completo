/* PARTE 1 */
import AppDispatcher from '../dispatcher/AppDispatcher';
import Events from 'events';
import TodoConstants from '../constants/TodoConstants';

var Channel = new Events.EventEmitter();
var CHANGE_EVENT = 'change';

var _todos = [
    {text: 'Item 1'},
    {text: 'Item 2'}
];

function create(text){
    _todos.push({text});
}


/* PARTE 2 */
var TodoStore = Object.assign({}, {
    getAll: ()=>{
        return _todos;
    },
    emitChange: ()=>{
        Channel.emit(CHANGE_EVENT);
    },
    addChangeListener: function(callback) {
        Channel.on(CHANGE_EVENT, callback);
    },
    removeChangeListener: function(callback) {
        Channel.removeListener(CHANGE_EVENT, callback);
    }
});

/* PARTE 3 */
function handleAction(action){
    switch(action.actionType){
        case TodoConstants.TODO_CREATE:
            var text = action.text;
            create(text);
            TodoStore.emitChange();
            break;
    }
}

/* PARTE 4 */
TodoStore.dispatchToken = AppDispatcher.register(handleAction);
export default TodoStore;