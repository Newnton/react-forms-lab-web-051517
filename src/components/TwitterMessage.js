import React from 'react';

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      text: ''
    };
  }

  callback = e => {
    this.setState({
      text: e.target.value
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <p>characters left: {this.props.maxChars - this.state.text.length}</p>
        <input type="text" value={this.state.text} onChange={this.callback}/>
      </div>
    );
  }
}

export default TwitterMessage;
