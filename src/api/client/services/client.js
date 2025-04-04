'use strict';

/**
 * client service
 */

const { factories } = require('@strapi/strapi');

const { createCoreService } = factories;

module.exports=  createCoreService('api::client.client', ({ strapi }) => ({
  async getPrivatedata() {
    return await strapi.entityService.findMany('api::client.client');
  },

  async getonePrivatedata(id) {
    return await strapi.entityService.findOne('api::client.client', id);
  },

  async postPrivatedata(data, user) {
    return await strapi.entityService.create('api::client.client', {
      data: {
        ...data,  // ✅ Corrected data structure
        user,
      },
    });
  },

  async deletePrivatedata(id) {
    return await strapi.entityService.delete('api::client.client', id); 
  },

  async updatePrivatedata(data, id) {
    return await strapi.entityService.update('api::client.client', id, { 
      data: {
        ...data,
      },
    });
  },
}));
