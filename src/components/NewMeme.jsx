import memesData from "../memesData"
import {useState} from "react"

export default function NewMeme() {
    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImg: ""
    });

    const [allMemeImg, setAllMemeImg] = useState(memesData);
    
    // Get new Meme Image
    function getMemeImg() {
        const memesArray = allMemeImg.data.memes;
        const randomNum = Math.floor(Math.random() * memesArray.length);
        const url = memesArray[randomNum].url;
        setMeme( prevMeme => ({
            ...prevMeme,
            randomImg: url
        }))

    }    


    return (
        <main>
            <div className="new-meme-container">
                <div className="input1">
                    <label className="first-label">Top text</label>
                    <input className="first-text medium-font" type="text"/>
                </div>
                
                <div className="input2">
                    <label className="second-label">Bottom Text</label>
                    <input className="second-text medium-font" type="text"/>
                </div>
                
                <button className="submit-btn" type="button" onClick={getMemeImg}>Generate Another Meme 🖼</button>
            </div>
            <div className="meme-img">
                <img src={meme.randomImg}/>
            </div>
        </main>
    )
}