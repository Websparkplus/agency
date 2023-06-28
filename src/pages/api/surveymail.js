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
      subject: `[NEW ORDER] Website Order from ${data.name}`,
      html: `<h1>Survey form submission received for ${data.order}</h1><br />
        <p><strong>Email:</strong> ${data.email}</p><br />
        <p><strong>Name:</strong> ${data.name}</p><br />
        <p><strong>Phone:</strong> ${data.phone}</p><br />
        <p><strong>Package ordered:</strong> ${data.order}</p><br />
        <p><strong>Business name:</strong> ${data.businessName}</p><br />
        <p><strong>Business description:</strong> ${data.businessDescription}</p><br />
        <p><strong>Previous website link:</strong> ${data.previousWebsite}</p><br />
        <p><strong>Social media links:</strong> ${data.socialMedia}</p><br />
        <p><strong>Message / addtional information:</strong> ${data.message}</p><br />
        `,
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
