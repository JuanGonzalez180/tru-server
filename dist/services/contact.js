"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendContact = void 0;
const nodemailer = __importStar(require("nodemailer"));
const dotenv_1 = __importDefault(require("dotenv"));
const sendContact = (name, email = '', message = '') => __awaiter(void 0, void 0, void 0, function* () {
    dotenv_1.default.config();
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
        result = yield transporter.sendMail({
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
    }
    catch (error) {
        result = error;
    }
    return result;
});
exports.sendContact = sendContact;
//# sourceMappingURL=contact.js.map