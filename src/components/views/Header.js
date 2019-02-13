import React, {Component} from 'react';

class Header extends Component {
    constructor(props) {
        super(props)

        this.state = {
            data: null
        }
    }

    render() {

        return (
            <nav
                className="grey darken-3"
                style={{
                display: "flex",
                flexFlow: "row nowrap",
                justifyContent: "flex-start",
                alignItems: "baseline",
                position: "absolute",
                top: 0
            }}>
                <a href="/">
                    <i
                        className="fas fa-journal-whills"
                        style={{
                        cursor: "pointer",
                        color: "var(--red)",
                        fontSize: "3em",
                        position: "relative",
                        top: "10px",
                        left: "10px"
                    }}></i>
                </a>
                <h5
                    style={{
                    display: "inline-block",
                    position: "relative",
                    left: "22px"
                }}>React SWAPI</h5>
            </nav>
        )
    }
}

export default Header;
