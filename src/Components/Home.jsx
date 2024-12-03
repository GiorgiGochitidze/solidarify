import LandingPage from "./LandingPage";
import './CSS/home.css'
import InfosPage from "./InfosPage";
import Locations from "./Locations";
import LawyerNums from "./LawyerNums";
import ArrestedLost from "./ArrestedLost";


const Home = () => {
    return ( 
        <main>
            <LandingPage />

            <InfosPage />

            <Locations />

            <LawyerNums />

            <ArrestedLost />
        </main>
     );
}
 
export default Home;