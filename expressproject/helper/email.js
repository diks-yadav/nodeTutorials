const nodemailer = require("nodemailer");
async function emailHandler(msg,user){
    var transport = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        auth: {
          user: "arceus7788@gmail.com",
          pass: "iwhxihatnockwjir",
        },
      });
      const info = await transport.sendMail({
        from: 'arceus7788@gmail.com', // sender address
        to: user, // list of receivers
        subject: "Welcome to user testing email ✔", // Subject line
        text: msg, // plain text body
        html: `<b>${msg}</b>`, // html body
      });
      return info;
}

module.exports=emailHandler