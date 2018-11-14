import React, {Component} from 'react';

class TextCounter extends Component{
    static defaultProps = {
        title: ""
    }

    state = {
        totalChars: 0
    }

    handleChange(event){
        var element = event.target,
            text = element.value;

        this.setState({totalChars: text.length});
    }

    render(){
        return(
            <div>
                {this.props.title}
                <textarea onChange={this.handleChange.bind(this)} />
                <div><b>Total:</b> {this.state.totalChars}</div>
            </div>
        );
    }
}
export default TextCounter;