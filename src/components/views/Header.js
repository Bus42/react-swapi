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
            <nav className="grey darken-3">
                <h5
                    className="brand-logo left"
                    style={{
                    position: "relative",
                    left: "8px"
                }}>The Wars</h5>
                <span className="right">
                    <a href="/">
                        <i
                            className="fas fa-journal-whills fa-3x"
                            style={{
                            cursor: "pointer",
                            color: "var(--red)",
                            position: "absolute",
                            top: "10px",
                            right: "12px"
                        }}></i>
                    </a>
                </span>
            </nav>
        )
    }
}

export default Header;
