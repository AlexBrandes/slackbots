/**
 * Created by Alex Brandes (alex@alexbrandes.io) on 8/24/16.
 */

'use strict';

const express = require( 'express' ),
    fs = require( 'fs' );


let app = express();

// Load all bots
fs
    .readdirSync( __dirname + '/bots' )
    .filter( function filenameFilter( filename ) {
        return ( ( filename.charAt( 0 ) !== '.' ) && ( filename !== 'index.js' ) );
    } )
    .forEach( function filenameHandler( filename ) {
        require( './bots/' + filename )( app );
    } );

const port = 8200;
app.listen( port, function() {
    console.log( 'listening on port ' + port );
} );