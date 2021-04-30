import * as express from "express";
import * as nodemailer from 'nodemailer';
import dotenv from "dotenv";

export const sendContact = async ( name:string, email:string = '', message:string = '' ) => {
    dotenv.config();

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.NODEMAILER_USER,
            pass: process.env.NODEMAILER_PASS,
        }
    });

    // send mail with defined transport object
    let result;
    try {
        result = await transporter.sendMail({
            from: `"Tru Group " <${process.env.NODEMAILER_USER}>`, // sender address
            to: `${email}`,
            cc: `${process.env.NODEMAILER_USER}`,
            subject: "Gracias por contáctarnos✔", // Subject line
            text: `Hola ${name}, Los datos suministrados son: correo electrónico:${email}, mensaje: ${message} `, // plain text body
            html: `<h3>Hola <b>${name},</b></h3>
                    Los datos suministrados son:<br><br>
                    <b>Correo electrónico:</b> ${email} <br>
                    <b>Mensaje:</b> ${message}
                    <br><br>
                `,
        });
    } catch (error) {
        result = error
    }

    return result;
}