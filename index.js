const nodemailer = require("nodemailer");
const cron = require("node-cron");

const mailOptions = {
  from: process.env.EMAIL_USERNAME, // Address of the sender
  to: "wisdomakpomeyoma@gmail.com", // Address of the receiver, mutiple emails are seperated by comma (,)
  subject: "Schedule Email with Node JS", // Email subject
  text: "Hello there", // Email text
  html: `
    <p>
    Hello there
    </p>`, // html file
};

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USERNAME,
    pass: "xibbbvozrjvyncbv",
  },
});

const mailSender = () => {
  return transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      console.error(err);
    } else {
      console.log("Email send successfully");
      console.log(info?.response);
    }
  });
};

cron.schedule("* 12 * * 1", mailSender);
