// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({ name: 'John Doe' })
}

// import nodemailer from "nodemailer";

// const handler = async (req, res) => {
//   if (req.method === "POST") {
//     const data = req.body;

//     const transporter = nodemailer.createTransport({
//       host: "smtp.gmail.com",
//       port: 465,
//       secure: true,
//       auth: {
//         user: process.env.EMAIL,
//         pass: process.env.PASS,
//       },
//     });

//     try {
//       const emailInfo = await transporter.sendMail({
//         from: `${data.email}`,
//         to: process.env.EMAIL,
//         subject: `[NEW MESSAGE] Contact Message From ${data.name}`,
//         html: `<h1>New message submission recieved</h1><br />
//         <p><strong>Email:</strong> ${data.email}</p><br />
//         <p><strong>Name:</strong> ${data.name}</p><br />
//         <p><strong>Phone:</strong> ${data.phone}</p><br />
//         <p><strong>Subject:</strong> ${data.subject}</p><br />
//         <p><strong>Message:</strong> ${data.message}</p><br />`,
//       });
//       console.log("Message sent successfully", emailInfo.messageId);
//     } catch (error) {
//       console.log(error);
//     }
//     return res.json({ data });
//   }

//   return res.status(400).json({
//     msg: "Bad Request",
//   });
// };

// export default handler;
