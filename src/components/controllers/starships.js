import React, {Component} from 'react';

class starships extends Component {
    constructor(props) {
        super(props)

        this.state = {
            data: null
        }
    }

    render() {

        return (
            <div id="starships">
                <div class="card">
                    <div class="card-title">starships Component Works</div>
                </div>
            </div>
        )
    }

}

export default starships;
