import "./CSS/lawyerNums.css"


const LawyerNums = () => {

    const location = window.location.pathname === "/LawyerNums";

    return ( 
        <div style={location ? { marginTop: "90px" } : {}} className="lawyers-container">
            <h1>იურისტების ნომრები</h1>
            <p>Lorem Ipsum - (+995 555 11 11 11)</p>
            <p>Lorem Ipsum - (+995 555 11 11 11)</p>
            <p>Lorem Ipsum - (+995 555 11 11 11)</p>
            <p>Lorem Ipsum - (+995 555 11 11 11)</p>
        </div>
     );
}
 
export default LawyerNums;