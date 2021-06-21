const prodModel = require('../models/prodModel')

async function getprodList (request, reply) {
    var limit   = 20;
    var offset  = 0;
    var page    = 1;
    
    if (typeof request.query.limit !== "undefined") {
      if (parseInt(request.query.limit) > 0) {
        limit = parseInt(request.query.limit);
      }
    }

    if (typeof request.query.page !== "undefined") {
      if (parseInt(request.query.page) > 0) {
        page = parseInt(request.query.page);
        offset = (page-1)*limit
      }
    }

    var queryParams = { offset: offset, limit: limit }
    const ProductData = await prodModel.prodList(queryParams);

    var response = {page: page, per_page: limit, data:ProductData[0]}
    return reply.status(200).send(response);
}

async function getprodlocList (request, reply) {
    
    const ProductData = await prodModel.prodlocList(request.params.location_name);
    if (ProductData.length > 0) {
        return reply.status(200).send({ data:ProductData[0] });
    } else {
        return reply.status(500).send({ error: "Product Not found!"});
    }
}

async function getprodlocListExt (request, reply) {
    
  const ProductData = await prodModel.prodlocListExt(request.params.location_name,request.params.type,request.params.type_query);
  if (ProductData.length > 0) {
      return reply.status(200).send({ data:ProductData[0] });
  } else {
      return reply.status(500).send({ error: "Product Not found!"});
  }
}


module.exports = {
    getprodList,
    getprodlocList,
    getprodlocListExt
};
