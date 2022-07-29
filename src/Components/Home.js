import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className='text-center py-5'>
            <img className="img" src="Assets/2Car.png" alt=""/>
            <h1 className='my-4 gas'>গ্যাসের সমস্যা দূর করতে</h1>
          
            <Link className='animate__animated animate__pulse' to="slider">  <Button variant="danger" size="lg">
            <h1>ট্যাপ করুন</h1>
        </Button></Link>
        </div>
    );
};

export default Home;