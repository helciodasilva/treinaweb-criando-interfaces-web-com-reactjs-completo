import React from 'react';
import { render } from 'react-dom'
import Events from 'events';

var Channel = new Events.EventEmitter();

export class MyList extends React.Component{
    state = {
        totalClicks: 0,
        items: []
    }

    componentDidMount = ()=>{
        Channel.on('listItem:click', this.childClick);
        Channel.on('listItem:remove', this.removeItem);
    }
    
    componentWillUnmount = ()=>{
        Channel.removeListener('listItem:click', this.childClick);
        Channel.removeListener('listItem:remove', this.removeItem);
    }

    childClick = ()=>{
        var totalClicks = ++this.state.totalClicks;
        this.setState({totalClicks});
    }

    addItem = (event)=>{
        var items = this.state.items,
        text = this.refs.itemText.value || `Item ${items.length}`;
    
        this.refs.itemText.value = '';
        items.push({text});
        this.setState({items});
    }
    
    removeItem = (index)=>{
        var items = this.state.items;
        items.splice(index, 1);
    
        this.setState({items});
    }

    render(){
        var props = this.props,
              state = this.state;

        return (
            <div>
                <h3>Total de Itens: {props.children.length}</h3>
                <h3>Total de Cliques: {state.totalClicks}</h3>
                <input type="text" ref="itemText" />
                <button onClick={this.addItem.bind(this)} >Adicionar</button>
                <ul>
                {
                    state.items.map((child, index)=>{
                        return <MyListItem onClick={this.childClick.bind(this)} color="red" text={item.children} index={index} key={index}  />
                    })
                }
                </ul>
            </div>
        );
    }
}

export class MyListItem extends React.Component{
    state = {
        totalClicks: 0
    }

    click = ()=>{
        var totalClicks = ++this.state.totalClicks;
        this.setState({totalClicks});
        Channel.emit('listItem:click');
    }

    removeItem = (index)=>{
        Channel.emit('listItem:remove', index);
    }

    render(){
        var props = this.props,
            state = this.state,
            style = {"color" : props.color};
        return(
            <li onClick={this.click} style={style} >
            {props.text}  - {state.totalClicks} <button onClick={this.removeItem.bind(this, props.index)} >X</button>
            </li>
        )
    }
}