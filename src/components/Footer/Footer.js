import React from 'react';
import pic from '../../images/download.png'
import pic1 from '../../images/download (1).png'
import pic2 from '../../images/download (2).png'
import { Button } from 'react-bootstrap';

const Footer = () => {
    return (
        <div>

            <Button className='btn btn-light w-1'><img style={{ width: '40px' }} src={pic} alt="" /></Button>
            <Button className='btn btn-light w-1'><img style={{ width: '50px' }} src={pic1} alt="" /></Button>
            <Button className='btn btn-light w-1'><img style={{ width: '50px' }} src={pic2} alt="" /></Button>
            <p>Copyright@arafatanjan</p>


        </div>
    );
};

export default Footer;