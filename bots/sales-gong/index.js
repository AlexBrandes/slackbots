/**
 * Created by Alex Brandes (alex@alexbrandes.io) on 10/19/16.
 */

'use strict';

const q = require( 'q' );


module.exports = function( app ) {
    app.get( '/sales-gong', function( req, res, next ) {
        res.send( {
            response_type: 'in_channel',
            text: 'Sales Gong!',
            attachments: [ {
                image_url: 'http://i.giphy.com/l3vRm2SjzCcqh8OYw.gif'
            } ]
        } );
    } );

    return app;
};


