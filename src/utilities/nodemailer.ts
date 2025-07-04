import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  name: "hostgator",
  host: import.meta.env.SMTP_HOST,
  port: import.meta.env.SMTP_PORT,
  secure: true,
  auth: {
    user: import.meta.env.SMTP_USER,
    pass: import.meta.env.SMTP_PASSWORD,
  },
});

export default transporter;
