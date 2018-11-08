import React from 'react'
import Map from './Map'

const sampleData = {
  mapUrl : ''
}


export default class Application extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      map : null
    };
  }

  componentDidMount(){
    this.getData();
    setInterval( () => this.getData() ,3000);
  }

  getData(){
  }



  render(props) {
    return (
      <div>
      {!this.state.map &&
      <div>
      </div>
      }
      {this.state.map &&
      <div>
      </div>
      }
      </div>
    )
  }
}
