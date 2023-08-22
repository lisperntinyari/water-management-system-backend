const axios = require("axios")


async function makeMpesaPayment(phoneNumber,billAmount) {
    try {
        const response = await axios.post('https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest',{
            "BusinessShortCode": 174379,
            "Password": "MTc0Mzc5YmZiMjc5ZjlhYTliZGJjZjE1OGU5N2RkNzFhNDY3Y2QyZTBjODkzMDU5YjEwZjc4ZTZiNzJhZGExZWQyYzkxOTIwMjMwODIyMDg0OTU3",
            "Timestamp": "20230822084957",
            "TransactionType": "CustomerPayBillOnline",
            "Amount": billAmount,
            "PartyA": phoneNumber,
            "PartyB": 174379,
            "PhoneNumber": phoneNumber,
            "CallBackURL": "https://mydomain.com/path",
            "AccountReference": "Nyari Flats ",
            "TransactionDesc": "Payment of Water Bill"
        },{
            headers:{
                'Content-Type': 'application/json',
                'Authorization': 'Bearer EiRs5AHHefbfPJfvhUByxywmLeEh'
            }

        })
        console.log("Payment response",response.data)
        return response.data
    }catch (e){
        console.log("Error making payment",e)
        return e
    }
}

module.exports = makeMpesaPayment

//
// let unirest = require('unirest');
// let req = unirest('POST', 'https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest')
//     .headers({
//         'Content-Type': 'application/json',
//         'Authorization': 'Bearer EiRs5AHHefbfPJfvhUByxywmLeEh'
//     })
//     .send(JSON.stringify({
//         "BusinessShortCode": 174379,
//         "Password": "MTc0Mzc5YmZiMjc5ZjlhYTliZGJjZjE1OGU5N2RkNzFhNDY3Y2QyZTBjODkzMDU5YjEwZjc4ZTZiNzJhZGExZWQyYzkxOTIwMjMwODIyMDk1ODM4",
//         "Timestamp": "20230822095838",
//         "TransactionType": "CustomerPayBillOnline",
//         "Amount": 1,
//         "PartyA": 254798375934,
//         "PartyB": 174379,
//         "PhoneNumber": 254798375934,
//         "CallBackURL": "https://mydomain.com/path",
//         "AccountReference": "WaterPayment",
//         "TransactionDesc": "Payment of X"
//     }))
//     .end(res => {
//         if (res.error) throw new Error(res.error);
//         console.log(res.raw_body);
//     });
