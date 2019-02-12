import React, { Component } from 'react'

class Footer extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
          used: ["React", "React Router", "Materialize", "CSS Grid", "Star Wars API", "CSS Flexbox"]
      }
    }

    render(){

        return (
            <footer id="Footer" className="page-footer grey darken-2">
                <div className="container">
                    <div className="row" style={{marginBottom: "0"}}>
                        <h5>Libraries and Frameworks Used</h5>
                        <ul style={{
                            display: 'flex',
                            flexFlow: 'row wrap'
                            }} >
                            {this.state.used.map(library => <li style={{display: "inline", padding: "3px 6px"}} key={this.state.used.indexOf(library)}>{library}</li>)}
                        </ul>
                    </div>
                </div>
            </footer>
        )
    }
    
}

export default Footer;
