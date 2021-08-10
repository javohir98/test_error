import React, { Component } from 'react'

export class Async_await extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: []
        }
    }

    componentDidMount() {
       this.fetch_api() 
    }

    fetch_api = async () => {
        const response = await fetch('https://api.github.com/users/hacktivist123/repos')
        const json = await response.json(); 
        this.setState({data: json})
    }

    render() {
        return (
            <div>
                <ul>
                    {this.state.data.map((item) => {
                        return <li key={item.id}>{item.name}</li>
                    })}
                </ul>
            </div>
        )
    }
}

export default Async_await
