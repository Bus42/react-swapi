import React, { Component } from 'react'

class Footer extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
          used: ["React", "Materialize"]
      }
    }

    render(){

        return (
            <footer className="page-footer grey darken-2">
                <div className="container">
                    <div className="row">
                        <h5>Libraries and Frameworks Used</h5>
                        <ul>
                            {this.state.used.map(library => <li key={this.state.used.indexOf(library)}>{library}</li>)}
                        </ul>
                    </div>
                </div>
            </footer>
        )
    }
    
}

export default Footer;
