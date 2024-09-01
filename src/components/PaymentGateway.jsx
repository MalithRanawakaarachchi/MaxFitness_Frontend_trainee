// PaymentForm.js
import Sidebar from '../components/navbar/Sidebar';
import React from 'react';
import './paymentGateway.css';
import { useState, useEffect} from 'react';
import { useStripe } from '@stripe/react-stripe-js';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { Container } from 'react-bootstrap';
import API from "../utils/api";

const MySwal = withReactContent(Swal)

const PaymentGateway = () => {
  const [err, setErr] = useState("");
  const[navVisible, setNavVisible]=useState(true);
  const publishedKey = 'pk_test_51OBsQVEhsh64VsfS9XDz2EqcSsmBAFaFx78Wsh511J1VbK5jUqSmbEPg98qRT3b3BtRhzlmZ45QjUz8FZq5JfyPZ00FvUuBiWA'

  const handleSuccess =()=>{
    MySwal.fire({
        icon: 'success',
        title: 'Payment was successful',
        time: 4000,
        
    });
  }

  const handleError =()=>{
    MySwal.fire({
        icon: 'error',
        title: 'Transaction faild !!!',
        time: 4000,
    });
  }



        const PayNow = async () => {
            try {
            const userId = sessionStorage.getItem('userId');
            const fname = sessionStorage.getItem('firstName');
            const lname = sessionStorage.getItem('lastName');
            const email = sessionStorage.getItem('email');
            if (!userId) {
                console.error('User ID not found in sessionStorage.');
                return;
            }
            const body = {
                payments: {
                    user_id: userId,
                    amount: '10000.00',
                    method: 'Online',
                    type: 'Monthly Fee',
                    added_time: new Date().toLocaleTimeString('en-US', { hour12: false }),
                    first_name: fname,
                    last_name: lname,
                    email: email,
                },  
            };
            console.log('show:', body)
            const response = await API.post('/payments', body);
            setErr('');
            window.location.replace('/payments');

            if(response.status == 200){

                handleSuccess();
                console.log('Your payment was successful');
            }

            } catch (error) {
                handleError();
                setErr('Process failed !!!');
                console.log(error);
            }
        };

  return (
    <div>
        <Sidebar visible={navVisible} setVisible={setNavVisible}/>
        <div>
            <StripeCheckout
                stripeKey={publishedKey}
                label="Pay Now"
                name="ONLINE PAYMENTS"
                // amount={'10000'}
                description='MAX FITNESS CENTER'
                
                token={PayNow}
            >   
        
                {/* <div>
                    <label>Cardholder Name</label>
                    <input type="text" />
                </div> */}
        
            </StripeCheckout>    
        </div>
    </div>
  );
};

export default PaymentGateway;
