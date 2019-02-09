import React, {Component} from 'react';

class species extends Component {
    constructor(props) {
        super(props)

        this.state = {
            data: null
        }
    }

    render() {

        return (
            <div id="species">
                <div class="card">
                    <div class="card-title">species Component Works</div>
                </div>
            </div>
        )
    }

}

export default species;
