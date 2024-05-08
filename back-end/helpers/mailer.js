const nodemailer = require("nodemailer");
const { EMAIL, SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS } = process.env;
const { generateVerificationToken } = require('./tokens');

exports.sendVerificationEmail = (email, name, verificationUrl) => {
  const token = generateVerificationToken(email);
  const verificationLink = `${verificationUrl}?token=${token}`;

  const transporter = nodemailer.createTransport({
    host: "smtp.hostinger.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: "leojones@imaggar.in" ,
      pass: "Aezakmi#1412",
    },
  });

  const mailOptions = {
    from: EMAIL,
    to: email,
    subject: "Account Verification",
    html: `<p>Hello ${name},</p><p>Please click the following link to verify your account:</p><p><a href="${verificationLink}">${verificationLink}</a></p>`,
  };

  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      console.error("Error sending verification email:", err);
    } else {
      console.log("Verification email sent:", info.response);
    }
  });
};

exports.sendPasswordResetEmail = (email, resetUrl) => {
  const token = generateVerificationToken(email);
  const resetLink = `${resetUrl}?token=${token}`;

  const transporter = nodemailer.createTransport({
    host: "smtp.hostinger.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: "leojones@imaggar.in" ,
      pass: "Aezakmi#1412",
    },
  });
    const mailOptions = {
      from: EMAIL,
      to: email,
      subject: "Password Reset",
      html: `<p>Hello,</p><p>Please click the following link to reset your password:</p><p><a href="${resetLink}">${resetLink}</a></p>`,
    };
  
    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        console.error("Error sending password reset email:", err);
      } else {
        console.log("Password reset email sent:", info.response);
      }
   
  });
};












































// const nodemailer = require("nodemailer");
// const { google } = require("googleapis");
// const { OAuth2 } = google.auth;
// const oauth_link = "https://developers.google.com/oauthplayground";
// const { EMAIL, MAILING_ID, MAILING_REFRESH, MAILING_SECRET } = process.env;

// const auth = new OAuth2(
//   MAILING_ID,
//   MAILING_SECRET,
//   MAILING_REFRESH,
//   oauth_link
// );

// exports.sendVerificationEmail = (email, name, url) => {
//   auth.setCredentials({
//     refresh_token: MAILING_REFRESH,
//   });
//   const accessToken = auth.getAccessToken();
//   const stmp = nodemailer.createTransport({
//     service: "gmail",
//     auth: {
//       type: "OAuth2",
//       user: EMAIL,
//       clientId: MAILING_ID,
//       clientSecret: MAILING_SECRET,
//       refreshToken: MAILING_REFRESH,
//       accessToken,
//     },
//   });
//   const mailOptions = {
//     from: EMAIL,
//     to: email,
//     subject: "Facebook email verification",
//     html: `<div style="max-width:700px;margin-bottom:1rem;display:flex;align-items:center;gap:10px;font-family:Roboto;font-weight:600;color:#3b5998">
//     <img src="https://res.cloudinary.com/dmhcnhtng/image/upload/v1645134414/logo_cs1si5.png" alt="" style="width:30px">
//     <span>Action requise : Activer votre compte Facebook</span>
// </div>
// <div style="padding:1rem 0;border-top:1px solid #e5e5e5;border-bottom:1px solid #e5e5e5;color:#141823;font-size:17px;font-family:Roboto">
//     <span>Bonjour ${name}</span>
//     <div style="padding:20px 0">
//         <span style="padding:1.5rem 0">Vous avez récemment créé un compte sur Facebook. Pour compléter votre inscription, veuillez confirmer votre compte.</span>
//     </div>
//     <a href=${url} style="width:200px;padding:10px 15px;background:#4c649b;color:#fff;text-decoration:none;font-weight:600">Confirmer votre compte</a>
//     <br>
//     <div style="padding-top:20px">
//         <span style="margin:1.5rem 0;color:#898f9c">Facebook vous permet de rester en contact avec tous vos amis. Une fois inscrit sur Facebook, vous pouvez partager des photos, organiser des événements et bien plus encore.</span>
//     </div>
// </div>
// `,
//   };
//   stmp.sendMail(mailOptions, (err, res) => {
//     if (err) return err;
//     return res;
//   });
// };
// exports.sendResetCode = (email, name, code) => {
//   auth.setCredentials({
//     refresh_token: MAILING_REFRESH,
//   });
//   const accessToken = auth.getAccessToken();
//   const stmp = nodemailer.createTransport({
//     service: "gmail",
//     auth: {
//       type: "OAuth2",
//       user: EMAIL,
//       clientId: MAILING_ID,
//       clientSecret: MAILING_SECRET,
//       refreshToken: MAILING_REFRESH,
//       accessToken,
//     },
//   });
//   const mailOptions = {
//     from: EMAIL,
//     to: email,
//     subject: "Reset facebook password",
//     html: `<div style="max-width:700px;margin-bottom:1rem;display:flex;align-items:center;gap:10px;font-family:Roboto;font-weight:600;color:#3b5998"><img src="https://res.cloudinary.com/dmhcnhtng/image/upload/v1645134414/logo_cs1si5.png" alt="" style="width:30px"><span>Action requise : Activate your facebook account</span></div><div style="padding:1rem 0;border-top:1px solid #e5e5e5;border-bottom:1px solid #e5e5e5;color:#141823;font-size:17px;font-family:Roboto"><span>Hello ${name}</span><div style="padding:20px 0"><span style="padding:1.5rem 0">You recently created an account on Facebook. To complete your registration, please confirm your account.</span></div><a  style="width:200px;padding:10px 15px;background:#4c649b;color:#fff;text-decoration:none;font-weight:600">${code}</a><br><div style="padding-top:20px"><span style="margin:1.5rem 0;color:#898f9c">Facebook allows you to stay in touch with all your friends, once refistered on facebook,you can share photos,organize events and much more.</span></div></div>`,
//   };
//   stmp.sendMail(mailOptions, (err, res) => {
//     if (err) return err;
//     return res;
//   });
// };
