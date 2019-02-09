import React, {Component} from 'react';

class planets extends Component {
    constructor(props) {
        super(props)

        this.state = {
            data: null
        }
    }

    render() {

        return (
            <div id="planets">
                <div class="card">
                    <div class="card-title">planets Component Works</div>
                </div>
            </div>
        )
    }

}

export default planets;
