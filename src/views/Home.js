import React, { Component } from 'react'
import GameContainer from '../components/GameContainer'
import '../App.css'
const axios = require('axios')
export default class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            games: [],
            query: ''
        }
        this.onChange=this.onChange.bind(this)
    }
    onChange(e)
    {
        this.setState({[e.target.name]:e.target.value})
    }
    UNSAFE_componentWillMount() {
        axios.get("http://starlord.hackerearth.com/TopSellingGames").then(
            res => {
                this.setState({ games: res.data })
                console.log(this.state.games)
            }
        ).catch(error => console.log(error))
    }
    render() {
        return (
            <div className="App">
                <h1>Game Directory</h1>
                <div>
                    <input name="query" type="text" placeholder="Search for game" onChange={this.onChange} value={this.state.query}/>
                </div>
                <GameContainer games={this.state.games} searchQuery={this.state.query} />
            </div>
        )
    }
}
