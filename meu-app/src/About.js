import React, { Component } from 'react';

class About extends Component {
  render() {
        return (
            <div>
                About Page - {this.props.match.params.minhaVariavel}
            </div>
        );
    }
}

export default About;