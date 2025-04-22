import nodemailer from 'nodemailer'


export async function sendMail(mailOptions){

    const {name, email, tel, message} = mailOptions

    const clientText = 
    
    `<p>Thank you ${name} for contacting us here at Le Gite du Bois Renard.</p>
    <br>
    <p>We have received your email and aim to reply to you shortly </p>
     <br>
    <p.</p>
     <br>
    <p></p>
     
     <br>
    <p>Best wishes,</p>
     <br>
    <p>Paul & Natasha </p>
     <br>
     `
    
    
   

    let mailOptionsReturn = {
        from: process.env.USER, 
        to: process.env.USER,
        subject: `New enquiry from ${email}`, 
        text: 'New enquiry from...  ' + name + ', telephone: ' + tel + ' message: ' + message + ' email: ' + email
    }

    let mailOptionsClient = {
        from: process.env.USER,
        to: email,
        subject: 'Thank you for you enquiry',
        html: clientText,
        attachments: [
            /*{
                
            },*/
          

        ]
    }


    return new Promise((resolve, reject)=> {

        let transporter = nodemailer.createTransport({
            host: process.env.HOST, // mail.papamail.net
            port: 465,
            secure: true,
            auth: {
                user: process.env.USER, // welcome@giteduboisrenard.fr
                pass: process.env.USERPASS, // not provding password but 100% correct
                
            },
        })

        let transporterInbound = nodemailer.createTransport({
            host: process.env.HOST,
            port: 993,
            secure: false,
            auth: {
                user: process.env.USER,
                pass: process.env.USERPASS,
                
            },
        })

          // transporter 2 is for testing
   /* let transporter2 = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
           user: 'marjory.bosco18@ethereal.email',
            pass: 'd3G4sKKTm2Jw5pJt7H'
        }
    });
    */

    
        
        transporter.sendMail(mailOptionsReturn, function(err, info) {
            console.log(process.env.USER, process.env.USERPASS, process.env.HOST)
            console.log(err, info)
            if (err) {
                
                resolve ( {
                    error: 'error sending message, please try again later'
                })
                
            } else {
                
                resolve ({
                    
                    message: 'Merci, we will get back to you soon'
                })
            }
            
         })

         transporter.sendMail(mailOptionsClient, function(error, info) {
            if (error) {
                console.log('client' + error)
            } else {
                console.log('sent to client', info)
            }
        })
    })  
      

}


