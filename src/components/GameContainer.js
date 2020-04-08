import React, { Component } from 'react'
import '../App.css'
export default class GameContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            games: []
        }
    }
    filterSearch=(game)=>{
        return (game.Name.toLowerCase().includes(this.props.searchQuery.toLowerCase())) || !game
    }
    UNSAFE_componentWillMount() {
        this.setState({ games: this.props.games })
        console.log(this.props.query)
    }

    render() {
        const games = this.props.games.filter(this.filterSearch).map((game, id) => (
            <div key={id} className="container">
                <h3>{game.Rank}</h3>
                <p>Name:{game.Name}</p>
                <p>Year:{game.Year}</p>
            </div>
        ))
        return (
            <div>
                {games}
            </div>
        )
    }
}
