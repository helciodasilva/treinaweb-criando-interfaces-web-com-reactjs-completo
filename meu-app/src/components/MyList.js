import React from 'react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

class MyList extends React.Component{

    static defaultProps = {
        items: [],
        onInsert: ()=>{}
    }

    addItem = ()=>{
        var items = this.props.items;
        var text = this.refs.itemText.value || `Item ${items.length}`;
        this.refs.itemText.value = "";

        this.props.onInsert({text});
    }

    render(){
        var props = this.props;

        return(
            <div>
                <h3>Total de Itens: {props.items.length}</h3>

                <input type="text" ref="itemText" />
                <button onClick={this.addItem.bind(this)} >Adicionar</button>

                <ul>
                    <CSSTransitionGroup
                        transitionName="myList"
                        transitionEnterTimeout={500}
                        transitionLeaveTimeout={300}
                    >
                        {
                            props.items.map((item, index)=>{
                                return (
                                    <li key={index} >
                                        {item.text}
                                    </li>
                                );
                            })
                        }
                    </CSSTransitionGroup>
                </ul>
            </div>
        );

    }
}

export default MyList;