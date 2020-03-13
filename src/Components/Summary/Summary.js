import React from 'react';
import './Summary.css';

const Summary = (props) => {

    
    const summary =props.summary;
    console.log(summary);

    let total=0;
    for (let i = 0; i < summary.length; i++) {  //total salary
        const newSummary = summary[i];
        total = total+Number(newSummary.salary) ;
        
    }
    return (
        <div className="style">
            <h3>Overall Summary</h3>
            <h6>Added person number:{summary.length}</h6>
            <h6>Total salary:{total}</h6>
            

             
            
        </div>
    );
};

export default Summary;