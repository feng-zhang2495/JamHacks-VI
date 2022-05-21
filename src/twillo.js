const accountSid = 'AC3e5f02f9a9bcf6879ae70fe18d2ce586'; 
const authToken = '[AuthToken]'; 
const client = require('twilio')(accountSid, authToken); 
 
function messaging(){
    client.messages 
    .create({ 
       body: 'testing',  
       messagingServiceSid: 'MG59158f2ad7425676c92f3b0e44883de2',     //the user sending
        
       to: '+15197226007' //chnage phone number
     }) 
    .then(message => console.log(message.sid)) 
    .done();
}