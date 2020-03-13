import React from 'react';
import './Profile.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'

const Profile = (props) => {
    //console.log(props);
    const {img,name,email,phone,salary}=props.profileItem;
    console.log("image src",img,"name",name);
    return (
        <div className="profileArea">
            <div>
                
                <img src={img} alt=""/>
                
                {/* <img src="https://via.placeholder.com/150" alt=""/>
                <img src="https://via.placeholder.com/150" alt=""/> */}

            </div>
            <div >
                <h4 className="profile-name">Name:{name}</h4>
                <p>Email:{email}</p>
                <p>Contact Number:{phone}</p>
                <p>Salary:${salary}</p>
                <button onClick={() => props.buttonOnClick(props.profileItem)}><FontAwesomeIcon icon={faUserPlus} />Add me</button>
                {/* <button onClick={() => props.buttonOnClick(props.profileItem)}>Add me</button> */}
            </div>
            <br/>
            
            
        </div>
    );
};

export default Profile;