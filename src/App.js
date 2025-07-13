import './App.css';
import axios from 'axios'
import React from 'react';

function App(){
     const [responseId, setResponseId] = React.useState("");
     const [responseState, setResponseState] = React.useState([]);

     const loadScript = (sec)=>{
        return new Promise((resolve)=>{
            const script = document.createElement("script");
            script.src = src;
            script.onload=()=>{
                resolve(true)
            }
            script.onerror = ()=>{
                resolve(false)
            }
            document.body.appendChild(script);
        })
     }

     const createRazorpayOrder = (amount) =>{
        let data=JSON.stringify({
            amount:amount*100,
            currency: "INR"
        })
       let config = {
        method: "post",
        maxBodyLength: Infinity,
        url:"http://localhost:5173/orders",
        headers: {
            'Content-Type': 'application/json'
        },
        data: data
       }
       axios.request(config)
       .then((response)=>{
        console.log(JSON.stringify(response.data))
        handleRazorpayScreen(response.data.amount)        
       })
        .catch((error)=>{
            console.log("error at", error)            
        })
     }

     const handleRazorpayScreen = async(amount)=>{
        const res=await loadScript("https:/checkout.razorpay.com/v1/checkout.js")

        if(!res){
            alert("some error at razorpay screen loading")
            return;
        }
        const options={
            key: "rzp_test_eyA2xV1QCROCWD",
            amount: amount,
            currency:'INR',
            name:"papaya coders",
            description: "payment to papaya coders",
            image: "photo.jpg",
            handler: function (response){
            setResponseId(response.razorpay_payment_id)
            },
            prefill:{
                name:"papaya coders",
                email:"papayacoders@gmail.com"
            },
            theme:{
                color:"#F4C430"
            }
        }
        const paymentObject=new window.Razorpay(options)
        paymentObject.open()
     }

     const paymentFetch = (e) =>{
        e.preventDefault();
        const paymentId=e.target.paymentId.value;
        axios.get(`http://localhost:5173/payment/${paymentId}`)
        .then((response)=>{
            console.log(response.data);
            setResponseState(response.data)            
        })
        .catch((error)=>{
            console.log("error occures",error);            
        })
     }
    return(
        <div className="App">
         <button onClick={()=>createRazorpayOrder(100)}>Payment of 100Rs. </button>
         {responseId && <p>{responseId}</p>}
         <h1>This is payment verification form</h1>
         <form onSubmit={paymentFetch}>
            <input type="text" name="paymentId"/>
            <button type="submit">Fetch Payment</button>
            {responseState.length !==0 && (
                <ul>
                    <li>Amount: {responseState.amount / 100} Rs.</li>
                    <li>Currency: {responseState.currency}</li>
                    <li>Status: {responseState.status}</li>
                    <li>Method: {responseState.method}</li>
                </ul>
            )}
         </form>
        </div>
    )
}
export default App;







