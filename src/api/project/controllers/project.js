'use strict';

/**
 * project controller
 */

const { factories } = require('@strapi/strapi');

const { createCoreController } = factories;
module.exports=  createCoreController('api::project.project',({strapi})=>({
    async getProjectdata(ctx){
        try {
            const find = await strapi.service('api::project.project').getProjectdata();
            ctx.body = find;
        } catch (error) {
            console.log(error)
        }
    },
    async getoneProjectdata(ctx){
        const id = ctx.params.id;
        try {
            const find = await strapi.service('api::project.project').getoneProjectdata(id)
            ctx.body = find;
        } catch (error) {
            console.log(error)
        }
    },
    async postProjectdata(ctx){
        const user = ctx.state.user;
        const data = ctx.request.body;
        try {
            const find = await strapi.service('api::project.project').postProjectdata(data,user.id)
            ctx.body = find;
        } catch (error) {
            console.log(error)
        }
    },
    async deleteProjectdata(ctx) {
        const id = ctx.params.id;
        return await strapi.Service.delete('api::project.project').deleteProjectdata(id);
      },
      async updateProjectdata(ctx) {
        const id = ctx.params.id;
        const data = ctx.request.body;
        return await strapi.Service.delete('api::project.project').updateProjectdata(...data,id);
      },
}));

