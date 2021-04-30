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
Object.defineProperty(exports, "__esModule", { value: true });
exports.register = void 0;
const contact = __importStar(require("./../services/contact"));
const respJson = __importStar(require("./../services/response"));
const register = (app) => {
    app.post('/api/contact', (request, response) => {
        //
        const { name, email, message } = request.body;
        if (!name)
            return respJson.responseType(response, 'Debes suministrar un nombre');
        if (!email)
            return respJson.responseType(response, 'Debes suministrar un correo electrónico');
        if (!message)
            return respJson.responseType(response, 'Debes suministrar un mensaje');
        contact.sendContact(name, email, message)
            .then(result => {
            if (result && result.accepted)
                respJson.responseType(response, 'Se ha enviado el formulario correctamente', 200);
            else
                respJson.responseType(response, 'No se ha podido enviar el correo electrónico');
        });
    });
};
exports.register = register;
//# sourceMappingURL=index.js.map