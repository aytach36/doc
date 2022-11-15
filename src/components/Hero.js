import heroImage from "../img/hero.png"
import "./Hero.css"

export default function Hero() {
    return (
        <div className="hero">
            <div className="container hero-box">
                <div className="hero-text">
                    <h1 className="heading-primary">Dr. Erchan Moustafa</h1>
                    <p className="hero-description">Ελάτε να σας βοηθήσω πριν γίνει πολύ αργά!</p>
                    <div className="btn-container">
                        <a href="#" className="btn-hero">ΚΛΕΙΣΕ ΡΑΝΤΕΒΟΥ</a>
                        <a href="#" className="btn-hero">ΚΑΝΕ ΜΙΑ ΕΡΩΤΗΣΗ</a>
                    </div>
                </div>
                <div className="hero-img"><img src={heroImage} /></div>
            </div>
        </div>
    )
}