import * as express from "express";
import * as contact from "./../services/contact";
import * as respJson from "./../services/response";

export const register = ( app: express.Application ) => {
    app.post('/api/contact', (request, response) => {
        //
        const { name, email, message } = request.body;

        if( !name )
            return respJson.responseType( response, 'Debes suministrar un nombre' )
        if( !email )
            return respJson.responseType( response, 'Debes suministrar un correo electrónico' )
        if( !message )
            return respJson.responseType( response, 'Debes suministrar un mensaje' )

        contact.sendContact( name, email, message )
            .then( result => {
                if( result && result.accepted )
                    respJson.responseType( response, 'Se ha enviado el formulario correctamente', 200 )
                else
                    respJson.responseType( response, 'No se ha podido enviar el correo electrónico' )
            });
    })

}