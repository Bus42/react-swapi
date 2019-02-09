import React, {Component} from 'react';

class vehicles extends Component {
    constructor(props) {
        super(props)

        this.state = {
            data: null
        }
    }

    render() {

        return (
            <div id="vehicles">
                <div class="card">
                    <div class="card-title">vehicles Component Works</div>
                </div>
            </div>
        )
    }

}

export default vehicles;
