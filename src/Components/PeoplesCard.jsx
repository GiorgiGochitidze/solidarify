const PeoplesCard = ({imageUrl, personName, lostPlace, contactNum, status}) => {
    return ( 
        <div className="peoplesCard-container">
            <img src={imageUrl} alt="just a man image" />
            <p>{personName}</p>
            <p>ტერიტორია: {lostPlace}</p>
            <p>საკონტაქტო: {contactNum}</p>
            <p>სტატუსი: {status}</p>
        </div>
     );
}
 
export default PeoplesCard;