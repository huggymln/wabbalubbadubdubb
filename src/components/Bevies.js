import { useState, useEffect } from "react";

export default function GetMorty(){

    const [data, setData]= useState([])

    const btn = {
        width: "calc(100% - 50px)",
        height: "50px",
        padding: "auto",
        backgroundColor: "skyblue",
        color: "white",

        borderRadius: "24px"
    };
    const img = {
        borderRadius: "24px",
        height:"150px",
        width:"150px" 
    };
    
    async function loadInfo(){
        const xhr = new XMLHttpRequest();
        const url = 'https://rickandmortyapi.com/api/character/'
        const randomint = () =>{
            const randomized = Math.floor(Math.random() * (826 - 1 + 1))+1;
            const completedurl = url+randomized
            return completedurl;
        }
        xhr.onreadystatechange = function() {
            if(this.readyState == 4 && this.status == 200){
                const received = JSON.parse(xhr.response)
                setData(received)
            }
        }
        xhr.open('GET', randomint(), true);
        xhr.send();
    }
    useEffect(()=>{
        loadInfo();
    },[])
    function alerted(){
        const loaded = document.getElementById("avatar").complete
        return loaded
    }
    if(data.length != 0){
        return(
        <div id="test">
            <h2 id="name">{data.name}</h2>
            <img id="avatar" 
                 src={data.image} 
                 onLoad={alerted}
                 style={img}
            loading="lazy" />
            <div>
                <h2>Gacha now!</h2>
                <button style={btn}
                        onClick={loadInfo}
                >wabalubbadubdubb</button>
                
            </div>
        </div>
        );
    }else{
        return(
            <div>
                <h1>Getting your plumbus...</h1>
            </div>
        )
    }
   
}