import React from 'react';

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      text: ''
    };
  }

  poemFormat = () => {
    const textLines = this.state.text.split('\n')
    if (textLines.length != 3){return false}
    let ret = true
    for(let i = 0; i < 3; i++){
      let lineLength = textLines[i].split(" ").filter((i)=>{return i.length > 0}).length
      if(i === 1){
        if(lineLength === 3){
          continue
        }else{
          ret = false
          continue
        }
      }
      else if(lineLength === 5){continue}
      ret = false
    }
    return ret
  }

  render() {
    return (
      <div>
        <textarea
          rows="3"
          cols="60"
          onChange={event => {this.setState({text: event.target.value})}}
        />
        {this.poemFormat() ? null :
        <div
          id="poem-validation-error"
          style={{color: 'red'}}
        >
          This poem is not written in the right structure!
        </div>}
      </div>
    );
  }
}

export default PoemWriter;
