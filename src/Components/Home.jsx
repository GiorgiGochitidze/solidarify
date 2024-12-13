import LandingPage from "./LandingPage";
import './CSS/home.css'
import InfosPage from "./InfosPage";
import Locations from "./Locations";
import LawyerNums from "./LawyerNums";
import DonationInfo from "./DonationInfo";


const Home = () => {
    return ( 
        <main>
            <LandingPage />

            <InfosPage />

            <Locations />

            <LawyerNums />

            <DonationInfo />
        </main>
     );
}
 
export default Home;