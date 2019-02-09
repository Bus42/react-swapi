import React, {Component} from 'react';

class people extends Component {
    constructor(props) {
        super(props)

        this.state = {
            data: null
        }
    }

    render() {

        return (
            <div id="people">
                <div class="card">
                    <div class="card-title">people Component Works</div>
                </div>
            </div>
        )
    }

}

export default people;
