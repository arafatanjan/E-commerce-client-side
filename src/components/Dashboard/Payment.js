import React from 'react';
import pay from '../../images/Payment-button.png'

const Payment = () => {
    return (
        <div className='pb-2'>
            <h5 style={{ color: 'purple' }}>Online Payment will be available soon!! Now only payment on delivery is available</h5>
            <img
                className="d-block w-100"
                src={pay}
                alt="First slide"
            />
        </div>
    );
};

export default Payment;