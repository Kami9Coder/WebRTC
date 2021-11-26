import {BrowserRouter as Router,Link} from "react-router-dom";

function Home() {
    return(
        <>
        <div className="header">
            <h1>TeleHealth Spikewell</h1>
        </div>
        <div className="navbar">
            <Router>
                <Link to ="/meet"> For Patients</Link> 
                <Link to ="/meet"> For Providers</Link>   
            </Router>
        </div>
        <div className="App" >
            <img src="https://www.coloradodepressioncenter.org/wp-content/uploads/2018/02/cu-depression-center-telemedicine.jpg" alt="telehealth"></img> 
        </div>
        <div className="footer">
            <h3>Contact Us</h3>
            <i class="fa fa-phone" aria-hidden="true"> 1234567890 </i><br></br>
            <i class="fa fa-linkedin" aria-hidden="true"> Spikewell India</i>
        </div>

        </>
    );
}
export default Home;