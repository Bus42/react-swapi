import React, {Component} from 'react';

class films extends Component {
    constructor(props) {
        super(props)

        this.state = {
            data: null
        }
    }

    render() {

        return (
            <div id="films">
                <div class="card">
                    <div class="card-title">films Component Works</div>
                </div>
            </div>
        )
    }

}

export default films;
