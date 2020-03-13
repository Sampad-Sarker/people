import React, { useState } from 'react';
import './MainArea.css';
import fakeData from '../../fakeData';
import Profile from '../ProfileArea/Profile';
import Summary from '../Summary/Summary';

const MainArea = () => {

    //console.log(fakeData);
    const [profile,setProfile] = useState(fakeData);  //data state initiate
    
    const[summary, setSummary] = useState([]); //summary state init
    
    const onClickFunction = (singleProfile) =>{
        //console.log("clicked",singleProfile);

        const newSummary = [...summary,singleProfile];//adding new profile  to newSummary
        setSummary(newSummary);  //update summary

        //console.log(summary);
    }
    
    
    return (
        <div className="main-container">
            <div className="colum-profile">
                
                
                   {
                    profile.map(element =><Profile profileItem={element} buttonOnClick={onClickFunction}></Profile> )
                   }
                           
               
                    
                
            </div>

            {/* <div className="colum-profile">
               
                
                   {
                    profile.map(element =><Profile profileItem={element} buttonOnClick={onClickFunction}></Profile> )
                   }
                 
            </div> */}

            <div className="summary">
                
                <Summary summary={summary}></Summary>
            </div>
            
        </div>
    );
};

export default MainArea;