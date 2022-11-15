import logo from "../img/logo.png"
import "./Navbar.css"

export default function Navbar() {
    return (
        <nav>
            <div className="upper-nav">
                <div className="logo-nav container">
                    <div className="logo-box">
                        <img src={logo} />
                    </div>
                    <div className="logo-info">
                        <div className="info-icon">
                            <ion-icon name="call-outline"></ion-icon>
                        </div>
                        <div className="info-description">
                            <p className="info-des-up">Καλέστε τώρα:</p>
                            <p className="info-des-down">2531088888</p>
                        </div>
                        <div className="logo-info">
                            <div className="info-icon">
                                <ion-icon name="time-outline"></ion-icon>
                            </div>
                            <div className="info-description">
                                <p className="info-des-up">Ώρες Λειτουργίας:</p>
                                <p className="info-des-down">Δευτέρα εώς Παρασκευή: 09:00-13:00</p>
                                <p className="info-des-down">Σάββατο: Κλειστά</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="nav-links-container container">
                <ul className="nav-links">
                    <li><a href="">Home</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Services</a></li>
                    <li><a href="">Treatments</a></li>
                    <li><a href="">Contact</a></li>
                </ul>
            </div>
        </nav>
    )
}