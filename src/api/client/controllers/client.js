'use strict';

/**
 * client controller
 */

const { factories } = require('@strapi/strapi');

const { createCoreController } = factories;

module.exports= createCoreController('api::client.client',({strapi})=>({
    async getPrivatedata(ctx){
        try {
            const find = await strapi.service('api::client.client').getPrivatedata();
            ctx.body = find;
        } catch (error) {
            console.log(error)
        }
    },
    async getonePrivatedata(ctx){
        const id = ctx.params.id;
        try {
            const find = await strapi.service('api::client.client').getonePrivatedata(id)
            ctx.body = find;
        } catch (error) {
            console.log(error)
        }
    },
    async postPrivatedata(ctx){
        const user = ctx.state.user;
        const data = ctx.request.body;
        try {
            const find = await strapi.service('api::client.client').postPrivatedata(data,user.id)
            ctx.body = find;
        } catch (error) {
            console.log(error)
        }
    },
    async deletePrivatedata(ctx) {
        const id = ctx.params.id;
        return await strapi.Service.delete('api::client.client').deletePrivatedata(id);
      },
      async updatePrivatedata(ctx) {
        const id = ctx.params.id;
        const data = ctx.request.body;
        return await strapi.Service.delete('api::client.client').updatePrivatedata(...data,id);
      },
}));
