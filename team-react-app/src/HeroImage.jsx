import React from "react";

function HeroImage({id, characterName, imageURL, setPoints}){
    function pointAdder(){
        setPoints(p=> p += 1 )
    }

    return(
        <>
            <button onClick={ pointAdder }><img src={imageURL}/></button>
            <p>{characterName}</p>
            <p>hi imagine a photo of here</p>
        
        </>
    )
}

export default HeroImage