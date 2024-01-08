import logo from "../assets/troll-face.png"

export default function Header() {
    return (
        <nav className="nav">   
            <a href="/" className="site-branding">
                <img className="logo" src={logo} alt="logo"/>
                <h3 className="site-title">Meme Generator</h3>
            </a>
            <h4 className="small-font">React Course - Project 3</h4>
        </nav>
    )
}