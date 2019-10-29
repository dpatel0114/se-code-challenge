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
        <div>
            <img class="latestImage" src={this.state.latestComic.img} alt={this.state.latestComic.alt} title={this.state.latestComic.title}/>
        </div>
    )
}


}

export default Home;