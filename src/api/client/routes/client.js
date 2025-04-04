'use strict';

/**
 * client router
 */

const { factories } = require('@strapi/strapi');

const { createCoreRouter } = factories;

module.exports= createCoreRouter('api::client.client',({strapi})=>({
   
        routes: [
          {
            method: 'GET',
            path: '/clients/get',
            handler: 'api::client.client.getPrivatedata',
            config: {
              auth: false
            },
          },
          {
              method: 'GET',
              path: '/clients/get/:id',
              handler: 'api::client.client.getonePrivatedata',
              config: {
                auth: false
              },
            },
          {
            method: 'POST',
            path: '/clients/post',
            handler: 'api::client.client.postPrivatedata',
            config: {
              auth: {
                  strategies: ['admin'], 
                }
            },
          },
          {
              method: 'PUT',
              path: '/clients/put/:id',
              handler: 'api::client.client.updatePrivatedata',
              config: {
                  auth: {
                      strategies: ['admin'], 
                    }
              },
            },
      
            {
              method: 'DELETE',
              path: '/clients/delete/:id',
              handler: 'api::client.client.deletePrivatedata',
              config: {
                  auth: {
                      strategies: ['admin'], 
                    }
              },
            },
        ],
    

      
}));
