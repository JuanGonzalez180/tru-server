import * as nodemailer from 'nodemailer';
import * as nodemailerSendgrid from 'nodemailer-sendgrid';
import dotenv from "dotenv";
export const sendContact = async (name, email = '', message = '') => {
    dotenv.config();
    const transporter = nodemailer.createTransport(nodemailerSendgrid.default({
        apiKey: process.env.SENDGRID_API_KEY
    }));
    // send mail with defined transport object
    let result;
    try {
        result = await transporter.sendMail({
            from: `"Tru Group " <${process.env.NODEMAILER_USER}>`,
            to: `${email}`,
            cc: `${process.env.NODEMAILER_USER}`,
            subject: "Gracias por contáctarnos✔",
            text: `Hola ${name}, Los datos suministrados son: correo electrónico:${email}, mensaje: ${message} `,
            html: `<h3>Hola <b>${name},</b></h3>
                    Los datos suministrados son:<br><br>
                    <b>Correo electrónico:</b> ${email} <br>
                    <b>Mensaje:</b> ${message}
                    <br><br>
                `,
        });
        result.error = false;
    }
    catch (error) {
        result = error;
        result.error = true;
    }
    return result;
};
//# sourceMappingURL=contact.js.map