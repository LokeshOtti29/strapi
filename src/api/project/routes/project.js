'use strict';

/**
 * project router
 */

const { factories } = require('@strapi/strapi');

const { createCoreRouter } = factories;

module.exports= createCoreRouter('api::project.project',({strapi})=>({
    routes: [
        {
          method: 'GET',
          path: '/projects/get',
          handler: 'api::project.project.getProjectdata',
          config: {
            auth: false,
          },
        },
        {
            method: 'GET',
            path: '/projects/get/:id',
            handler: 'api::project.project.getoneProjectdata',
            config: {
              auth: false,
            },
          },
        {
          method: 'POST',
          path: '/projects/post',
          handler: 'api::project.project.postProjectdata',
          config: {
            auth: {
                strategies: ['admin'], 
              }, 
          },
        },
        {
            method: 'PUT',
            path: '/projects/put/:id',
            handler: 'api::project.project.putProjectdata',
            config: {
                auth: {
                    strategies: ['admin'], 
                  },
            },
          },
    
          {
            method: 'DELETE',
            path: '/projects/delete/:id',
            handler: 'api::project.project.deleteProjectdata',
            config: {
                auth: {
                    strategies: ['admin'], 
                  },
            },
          },
      ],
}));
