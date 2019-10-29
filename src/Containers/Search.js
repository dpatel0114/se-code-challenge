import React, { Component } from 'react';


class Search extends Component {

    getComic(e){
        // console.log(e.target.searchedImg.value)
        if(e.target.searchedImg.value <= 2219 && e.target.searchedImg.value >= 1){
        fetch(`https://xkcd.now.sh/?comic=${e.target.searchedImg.value}`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            const img = document.getElementById('searchImage')
            img.src = data.img
            img.alt = data.title
            img.title = data.alt
            const year = document.getElementById('year')
            year.innerText = `Published on : ${data.month}/${data.day }/${data.year}` 
        }) 
    } else {
        alert("Value should be in between 1 to 2219!!")
    }
        e.preventDefault()
    }

    render(){
        return(
            <div style={{textAlign:"center"}}>
            <form class="form-inline" onSubmit={this.getComic}>
                <input class="searchInput" name='searchedImg' style={{padding:"10px", margin: "10px"}} type="text"/> 
                <button class='searchSubmit' type="submit" style={{fontSize: "25px"}}> Submit </button>
            </form>
            <div>
                <p id="year"> </p>
                <img id="searchImage" src="" alt="" title=""/>
            </div>
            </div>
        )
    }



}

export default Search;