import nodemailer from "nodemailer";

const handler = async (req, res) => {
  if (req.method === "POST") {
    const data = req.body;

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
      },
    });

    try {
      const emailInfo = await transporter.sendMail({
        from: `${data.email}`,
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
      });
      console.log("Message sent successfully", emailInfo.messageId);
    } catch (error) {
      console.log(error);
    }

    return res.json({ data });
  }

  return res.status(400).json({
    msg: "Bad Request",
  });
};

export default handler;
