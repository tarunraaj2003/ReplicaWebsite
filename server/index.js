const nodemailer=require("nodemailer");
const express=require("express");
const cors=require("cors");
const app=express();
app.use(express.json());
app.use(cors(
    {
        origin:"http://localhost:3000"
    }
));


app.post('/send',(req,res)=>{
    let data=req.body
    let setpTransport=nodemailer.createTransport({
        service:'gmail',
        port:465,
        auth:{
            user:'tarunraaj.meiiporul@gmail.com',
            pass:'dkcqzdwxtvszimie'
        },
        tls:{
        rejectUnauthorized:false
}
    });
const mailOptions={
     from:'tarunraaj.meiiporul@gmail.com',
     to:'tarunraaj.meiiporul@gmail.com',
     subject:`Message from ${data.name}`,
     html:`
     <h3>Informations</h3>
     <ul>
     <li>Name: ${data.name}</li>
     <li>Email: ${data.email}</li>
     <li>Phone: ${data.phone}</li>
     </ul>
     `
 };

 setpTransport.sendMail(mailOptions,(error,response)=>{
    if(error){
        console.log(error);
        res.send(error);
    }
    else{
        res.send('Sent successfully')
    }
 });

setpTransport.close();

})

app.listen(4000,function check(err)
{
    if(err)
    console.log("error")
    else
    console.log("started")
})























// const nodemailer=require("nodemailer");
// const express=require("express");
// const cors=require("cors");
// const app=express();
// app.use(express.json());
// app.use(cors(
//     {
//         origin:"http://localhost:3000"
//     }
// ));
// /*

// */

// app.post('/send',(req,res)=>{
//     let data=req.body
//     let setpTransport=nodemailer.createTransport({
//         service:'gmail',
//         port:465,
//         auth:{
//             user:'tarunraaj.meiiporul@gmail.com',
//             pass:'dkcqzdwxtvszimie'
//         }
//     });
// const mailOptions={
//      from:"tarunraaj.meiiporul@gmail.com",
//      to:'tarunraaj2003@gmail.com',
//      subject:`Message from ${data.name}`,
//      html:`
//      <h3>Informations</h3>
//      <ul>
//      <li>Name: ${data.name}</li>
//      <li>Email: ${data.email}</li>
//      <li>Phone: ${data.phone}</li>
//      </ul>
//      `
//  };

//  setpTransport.sendMail(mailOptions,(error,response)=>{
//     if(error){
//         res.send(error);
//     }
//     else{
//         res.send('Success')
//     }
//  });

// setpTransport.close();

// })

// app.listen(6000,function check(err)
// {
//     if(err)
//     console.log("error")
//     else
//     console.log("started")
// })












// const transporter=nodemailer.createTransport({
//     service:'gmail',
//     auth:{
//         user:'tarunraaj.meiiporul@gmail.com',
//         pass:"dkcqzdwxtvszimie",
//     },
//     tls:{
//         rejectUnauthorized:false
//     }
// });

// const options={
//     from:'tarunraaj.meiiporul@gmail.com',
//     to:'tarunraaj2003@gmail.com',
//     subject:'Sending email with node.js',
//     text:'Hello! Test email'
// };

// transporter.sendMail(options,function(err,info){
//     if(err){
//         console.log(err);
//         return;
//     }
//     console.log("Sent: "+ info.response);
// })