import React from 'react';

class Sketch extends React.Component {
  constructor(props) {
    super(props);

    this.state = {}
  }

  componentDidMount() {
    
  }

  render() {
    return (
      <div className="sketch-preview">
        {this.props.sketch}
      </div>
    );
  }
}

export default Sketch;
