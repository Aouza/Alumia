const express = require("express");
const SMTP_CONFIG = require("./config/smtp");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/email-send", (req, res) => {
  const { email } = req.body;

  let transporter = nodemailer.createTransport({
    host: SMTP_CONFIG.host,
    port: SMTP_CONFIG.port,
    secure: false,
    auth: {
      user: SMTP_CONFIG.user,
      pass: SMTP_CONFIG.pass,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  transporter
    .sendMail({
      from: '"Alumia Online" <alumiadevelopment@gmail.com>',
      to: "alumiadevelopment@gmail.com",
      subject: `Nova semente 🌱 ${email}`,
      html: `

    <html>
        <body>
            <div class="mail">
            <h3 style="font-size: 1.4rem;">Nova semente cadastrada!</h3>
            <ul style="
              list-style: none;
              font-size: 1rem;
              font-weight: bold;
              ">
                        <li>${email}</li>
                    </ul>
            </div>
        </body>
    </html>
      
      `,
    })
    .then((response) => {
      console.log(`E-mail enviado com sucesso: ${response}`);
    })
    .catch((err) => {
      console.log(`Aconteceu algum erro ${err}`);
    });
});

app.post("/email-name-send", (req, res) => {
  const { name, email } = req.body;

  let transporter = nodemailer.createTransport({
    host: SMTP_CONFIG.host,
    port: SMTP_CONFIG.port,
    secure: false,
    auth: {
      user: SMTP_CONFIG.user,
      pass: SMTP_CONFIG.pass,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  transporter
    .sendMail({
      from: '"Alumia Online" <alumiadevelopment@gmail.com>',
      to: "alumiadevelopment@gmail.com",
      subject: `Nova semente 🌱 ${name}`,
      html: `
      <html>
      <body>
        <div class="mail">
          <h3 style="font-size: 1.4rem;">Nova semente cadastrada!</h3>
                  <ul style="
                    list-style: none;
                    font-size: 1rem;
                    font-weight: bold;
                    ">
                    <li >${name}</li>
                    <li>${email}</li>
                  </ul>
          </div>
      </body>
  </html>
    
    `,
    })
    .then((response) => {
      console.log(`E-mail enviado com sucesso: ${response}`);
    })
    .catch((err) => {
      console.log(`Aconteceu algum erro ${err}`);
    });
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
