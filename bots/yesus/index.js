/**
 * Created by Alex Brandes (alex@alexbrandes.io) on 8/24/16.
 */

'use strict';

const q = require( 'q' ),
    request_promise = require( 'request-promise' );


module.exports = function( app ) {
    app.get( '/yesus', function( req, res, next ) {
        return q
            .async( function *() {
                let yesus_message = yield request_promise( {
                    method: 'get',
                    uri: 'https://yepi.io/api/quote'
                } );

                res.send( {
                    response_type: 'in_channel',
                    message: yesus_message
                } );
            } )()
            .catch( next );
    } );

    return app;
};


