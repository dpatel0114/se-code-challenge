import React, { Component } from 'react';

class Home extends Component {

    constructor(props){
        super()
        this.state={
            latestComic : []
        }
    }

    componentDidMount(){
        fetch("https://xkcd.now.sh/?comic=latest")
        .then(res => res.json())
        .then(data => {
            console.log(data)
            this.setState( {latestComic: data} )
        })
    }

render(){
    return(
        <div style={{textAlign:"center"}}>
            
            <p>Published on : {this.state.latestComic.month}/{this.state.latestComic.day }/{this.state.latestComic.year}</p>
            <img class="latestImage" src={this.state.latestComic.img} alt={this.state.latestComic.title} title={this.state.latestComic.alt}/>
        </div>

    )
}


}

export default Home;