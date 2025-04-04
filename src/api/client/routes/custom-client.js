
'use strict';

module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/clients/get',
      handler: 'client.privateAction',
      config: {
        auth: true, 
      },
    },
    {
      method: 'POST',
      path: '/clients/post',
      handler: 'client.privateAction',
      config: {
        auth: true, 
      },
    },
    {
        method: 'PUT',
        path: '/clients/put',
        handler: 'client.privateAction',
        config: {
          auth: true, 
        },
      },

      {
        method: 'DELETE',
        path: '/clients/delete',
        handler: 'client.privateAction',
        config: {
          auth: true, 
        },
      },
  ],
};
