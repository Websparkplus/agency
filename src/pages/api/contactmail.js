import nodemailer from "nodemailer";

export default async (req, res) => {
  if (req.method === "POST") {
    const data = req.body;

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASS,
      },
    });

    await new Promise((resolve, reject) => {
      // verify connection configuration
      transporter.verify(function (error, success) {
        if (error) {
          console.log(error);
          reject(error);
        } else {
          console.log("Server ready for messages");
          resolve(success);
        }
      });
    });

    const mailData = {
      from: {
        name: `${data.name}`,
        address: `${data.email}`,
      },
      to: process.env.EMAIL,
      subject: `[NEW MESSAGE] Contact Message From ${data.name}`,
      html: `<h1>New message submission recieved</h1><br />
      <p><strong>Email:</strong> ${data.email}</p><br />
      <p><strong>Name:</strong> ${data.name}</p><br />
      <p><strong>Phone:</strong> ${data.phone}</p><br />
      <p><strong>Subject:</strong> ${data.subject}</p><br />
      <p><strong>Message:</strong> ${data.message}</p><br />`,
    };

    await new Promise((resolve, reject) => {
      // send mail
      transporter.sendMail(mailData, (err, info) => {
        if (err) {
          console.error(err);
          reject(err);
        } else {
          console.log(info);
          resolve(info);
        }
      });
    });

    res.status(200).json({ status: "OK" });
  }

  return res.status(400).json({
    msg: "Bad Request",
  });
};
