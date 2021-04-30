import dotenv from "dotenv";
import express from "express";
import path from "path";
import cors from "cors";

import * as routes from "./routes";

// initialize configuration
dotenv.config();

const port = process.env.SERVER_PORT || 3000;
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configure Express to use EJS
app.set( "views", path.join( __dirname, "views" ) );
app.set( "view engine", "ejs" );

// define a route handler for the default home page
app.get( "/", ( req, res ) => {
    // render the index template
    res.render( "index" );
});

// Configure routes
routes.register( app );

// start the express server
app.listen( port, () => {
    // tslint:disable-next-line:no-console
    console.log( `server started at http://localhost:${ port }` );
} );
