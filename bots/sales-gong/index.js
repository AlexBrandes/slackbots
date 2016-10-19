/**
 * Created by Alex Brandes (alex@alexbrandes.io) on 10/19/16.
 */

'use strict';

const q = require( 'q' );


module.exports = function( app ) {
    app.get( '/sales-gong', function( req, res, next ) {
        res.send( {
            response_type: 'in_channel',
            text: '<img src="https://m.popkey.co/a85dca/wqavR.gif" alt="Sales Gong">'
        } );
    } );

    return app;
};


