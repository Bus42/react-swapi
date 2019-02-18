import React, {Component} from 'react';

class Detail extends Component {
    state = {
        data: null
    }

    componentDidMount() {
        const data = this.props.location.state.data;
        data.dataKeys = Object.keys(data);
        this.getStorage()
        .then(res => data.stored = res)
        .finally(()=>{this.setState({data})})
    }

    getDetail = (value) => {
        return new Promise((resolve, reject) => {
            //console.log(`getDetail(${value})`)
            fetch(value)
            .then(res => res.json())
            .then(data => {
                sessionStorage.setItem(`${data.url}`, JSON.stringify(data));
                //Can't perform a React state update on an unmounted component.
                resolve(data)
            })
            .catch(err => reject(err))
        })
    }

    getStorage = () => {
        let data = {}
        return new Promise((resolve, reject) => {
            const storageKeys = Object.keys(sessionStorage);
            storageKeys.forEach(key => {
                console.log(key)
                data[key] = JSON.parse(sessionStorage.getItem(key))
            })
            resolve(data)
            reject(err => console.error(err))
        })
    }

    render() {

        const urlRegExp = /(https:\/\/)/;

        return (
            <div className="container">
                <div className="card grey darken-3">
                    <div className="card-title grey darken-3">
                        <h4
                            style={{
                            padding: "8px"
                        }}>{this
                                .props
                                .match
                                .params
                                .id
                                .toUpperCase()
                                .replace(/[_]/g, ' ')}
                        </h4>
                    </div>
                    <div className="card-content">
                        {this.state.data
                            ? <ul>{this
                                        .state
                                        .data
                                        .dataKeys
                                        .map((dataKey, index) => {
                                            const value = this.state.data[dataKey];
                                            //detect if value is a URL or URL array object
                                            if (urlRegExp.test(value)) {
                                                //single URL
                                                if (typeof(value) === 'string' && dataKey !== 'url') {
                                                    this.getDetail(value)
                                                    .then(data => {
                                                        console.log(data);
                                                        sessionStorage.setItem(`${data.url}`, JSON.stringify(data));
                                                    });
                                                    return <li key={index}>{`${dataKey.toUpperCase()}`}: {this.state.data.stored[value] ? <span className="link-text" >{this.state.data.stored[value].name || this.state.data.stored[value].title}</span> : <div className="progress">
                                                        <div className="indeterminate"></div>
                                                    </div> }</li>
                                                }
                                                //multiple URLs
                                                if (typeof(value) === 'object') {
                                                    return (<ul key={index}>
                                                    {`${dataKey.toUpperCase()}`}
                                                        {value.map((each, v) => {
                                                            this.getDetail(each)
                                                            .then(data => {
                                                                console.log(data);
                                                                sessionStorage.setItem(`${data.url}`, JSON.stringify(data));
                                                            })
                                                            return this.state.data.stored[each] ? <div className="link-text" style={{padding: "0 1em"}} key={`${index}${v}`} >{this.state.data.stored[each].name || this.state.data.stored[each].title }</div> : <div key={`${index}${v}`} className="progress">
                                                                <div className="indeterminate"></div>
                                                            </div>
                                                        } )}
                                                    </ul>)
                                                }
                                            } else {
                                                return (
                                                    <li key={index}>
                                                        <span>{dataKey
                                                                .replace(/[_]/g, ' ')
                                                                .toUpperCase()}:
                                                        </span> <span
                                                            style={{
                                                            color: "var(--silver)"
                                                        }}>
                                                            {value}</span>
                                                    </li>
                                                )
                                            }
                                            return null
                                        })}</ul>
                            : <div className="progress">
                                <div className="indeterminate"></div>
                            </div>}
                    </div>
                </div>
            </div>
        )
    }

}

export default Detail;
