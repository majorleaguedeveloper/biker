import React, { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Store } from '../Store';

const Deposit = () => {
    const { state} = useContext(Store);  // Get the state and dispatch function from the Store
    const { userInfo } = state;

    return (
        <div className="d-flex justify-content-center my-3" style={{ minHeight: '100vh' }}>
            <div className="bg-white p-4 rounded shadow" style={{ width: '100%' }}>
                <h2 className="text-center">M-Pesa Deposit</h2>
                <p>Minimum Deposit Ksh 200</p>
                <p>200% bonus for first time deposits above kshs 499</p>
                <p>300% bonus for first time deposits above kshs 1999</p>
                <p>Businness Number: <span style={{color:'green'}}>247247</span></p>
                {userInfo? (<span style={{color:'blue'}}>{userInfo.name},</span>) : (<span></span>) } <span>Your unique account number is: <span style={{color:'green'}}>0280185871017</span></span>
            </div>
        </div>
    );
};

export default Deposit;
