// const express = require('express');
// const bodyParser = require('body-parser');
// const cors = require("cors");
// const Razorpay = require("razorpay")

// const app=express();
// const port = 5000;

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: true}));
// app.use(cors());

// app.get('/', (req, res)=>{
//     res.send("Hello world!");
// })

// app.post('/orders', async(req, res) => {
//     const razorpay = new Razorpay({
//         key_id: "rzp_test_eyA2xV1QCROCWD",
//         key_secret: "F7wMQKIhTQXpyTfn4MDzHSz1"
//     })
//     const options={
//         amount: req.body.amount,
//         currency: req.body.currency,
//         receipt: "receipt#1",
//         payment_capture: 1
//     }
//     try{
//         const response = await razorpay.orders.create(options)
//         res.json({
//             order_id: response.id,
//             currency: response.currency,
//             amount: response.amount
//         })
//     } catch (error){
//         res.status(500).send("Internal server error")
//     }
// })

//   app.get("/payment/:paymentId", async(req, res)=>{
//     const {paymentId}=req.params;

//     const razorpay = new Razorpay({
//         key_id: "rzp_test_eyA2xV1QCROCWD",
//         key_secret: "F7wMQKIhTQXpyTfn4MDzHSz1"
//     })
//     try{
//         const payment = await razorpay.payments.fetch(paymentId)

//         if(!payment){
//             return res.status(500).json("Enter at razorpay loading")
//         }
//         res.json({
//             status: payment.status,
//             method: payment.method,
//             amount: payment.amount,
//             currency: payment.currency
//         })
//     } catch(error){
//         res.status(500).json("failed to fetch")
//     }
//   })

// app.listen(port, ()=>{
//     console.log(`server is running on ${port}`);
    
// })




// grok se liya h mene is code ko

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const Razorpay = require('razorpay');
require('dotenv').config(); // पर्यावरण वेरिएबल्स के लिए

const app = express();
const port = 5000; // पोर्ट को 5000 पर सेट किया

// मिडलवेयर
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({ origin: 'http://localhost:5173' })); // फ्रंटएंड के लिए CORS

// Razorpay इंस्टेंस
const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID || 'rzp_test_eyA2xV1QCROCWD',
  key_secret: process.env.RAZORPAY_KEY_SECRET || 'F7wMQKIhTQXpyTfn4MDzHSz1',
});

// रूट्स
app.get('/', (req, res) => {
  res.send('Hello world!');
});

// ऑर्डर बनाने का रूट
app.post('/orders', async (req, res) => {
  const options = {
    amount: req.body.amount, // Amount in paise
    currency: req.body.currency || 'INR',
    receipt: `receipt_${Date.now()}`,
    payment_capture: 1,
  };

  try {
    const response = await razorpay.orders.create(options); // टाइपो ठीक किया
    res.json({
      order_id: response.id,
      currency: response.currency,
      amount: response.amount,
    });
  } catch (error) {
    console.error('Error creating order:', error);
    res.status(500).json({ error: 'Failed to create order' });
  }
});

// पेमेंट डिटेल्स फेच करने का रूट
app.get('/payment/:paymentId', async (req, res) => {
  const { paymentId } = req.params;

  try {
    const payment = await razorpay.payments.fetch(paymentId);

    if (!payment) {
      return res.status(404).json({ error: 'Payment not found' });
    }

    res.json({
      status: payment.status,
      method: payment.method,
      amount: payment.amount,
      currency: payment.currency,
    });
  } catch (error) {
    console.error('Error fetching payment:', error);
    res.status(500).json({ error: 'Failed to fetch payment' });
  }
});

// सर्वर शुरू करें
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});