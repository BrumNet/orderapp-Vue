let products = require('../controllers/products');
let exceltnnp = require('../models/excelupload');

async function routes (fastify, options) {

    fastify.get('/', function (request, reply) {
        reply.send({message: 'ping success', code: 200})
    })

    fastify.get('/products', products.getprodList);
    fastify.get('/products/location/:location_name', products.getprodlocList);
    fastify.get('/products/location/:location_name/:type/:type_query', products.getprodlocListExt);
    //fastify.post('/upload/excel', exceltnnp.upload);

}

module.exports = routes;
