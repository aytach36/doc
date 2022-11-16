import appointmentImage from "../img/appointment-img.jpg"

import "./Appointment.css"
export default function Appointment() {
    return (
        <div className="appointment-section">
            <div className="work-hours">
                <h2 className="heading-secondary">ΩΡΕΣ <span>ΛΕΙΤΟΥΡΓΕΙΑΣ</span></h2>
                <p className="work-hours-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, molestias.</p>
                <div className="work-hour-detailed">
                    <div className="work-hour">
                        <p>Monday - Thursday:</p>
                        <p>10:00 am - 2:00 pm</p>
                    </div>
                    <div className="work-hour">
                        <p>Friday:</p>
                        <p>12:00 am - 3:00 pm</p>
                    </div>
                    <div className="work-hour">
                        <p>Saturday:</p>
                        <p>13:00 am - 3:00 pm</p>
                    </div>
                    <div className="work-hour">
                        <p>Sunday:</p>
                        <p>10:00 am - 2:00 pm</p>
                    </div>
                </div>
            </div>
            <div className="appointment-form">
                <h2 className="heading-secondary">ΚΛΕΙΣΕ ΡΑΝΤΕΒΟΥ</h2>
                <form action="">
                    <input type="text" placeholder="Όνομα" />
                    <input type="text" placeholder="Τηλέφωνο" />
                    <input type="text" placeholder="Ημερομηνία" />
                    <input type="text" placeholder="Email" />
                    <div className="button-div">
                        <button>ΚΛΕΙΣΕ ΡΑΝΤΕΒΟΥ ΤΩΡΑ!</button>
                    </div>
                </form>
            </div>
            <div className="appointment-image">
                <img src={appointmentImage} alt="" />
            </div>
        </div>
    )
}
