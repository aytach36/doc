import "./Services.css"

export default function Services() {
    return (
        <div className="services">
            <div className="service-box container">
                <div className="service">
                    <div className="service-icon"><ion-icon name="medkit-outline"></ion-icon></div>
                    <h3 className="heading-tertiary">Ambulatory</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <div className="service">
                    <div className="service-icon"><ion-icon name="heart-outline"></ion-icon></div>
                    <h3 className="heading-tertiary">Vaccination</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <div className="service">
                    <div className="service-icon"><ion-icon name="medkit-outline"></ion-icon></div>
                    <h3 className="heading-tertiary">General Surgery</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <div className="service">
                    <div className="service-icon"><ion-icon name="heart-outline"></ion-icon></div>
                    <h3 className="heading-tertiary">Physicians</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>

            </div>
        </div>
    )
}
