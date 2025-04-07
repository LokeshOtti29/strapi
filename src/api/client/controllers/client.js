"use strict";

/**
 * client controller
 */

const { factories } = require("@strapi/strapi");

const { createCoreController } = factories;

module.exports = createCoreController("api::client.client", ({ strapi }) => ({
  async getPrivatedata(ctx) {
    try {
      const find = await strapi.service("api::client.client").getPrivatedata();
      ctx.body = find;
      console.log(ctx.body);
    } catch (error) {
      console.log(error);
    }
  },
  async getonePrivatedata(ctx) {
    const id = ctx.params.id;
    try {
      const find = await strapi
        .service("api::client.client")
        .getonePrivatedata(id);
      ctx.body = find;
    } catch (error) {
      console.log(error);
    }
  },
  async postPrivatedata(ctx) {
    const data = ctx.request.body;
    console.log(data);
    try {
      const find = await strapi
        .service("api::client.client")
        .postPrivatedata(data);
      ctx.body = find;
      console.log(ctx.body);
    } catch (error) {
      console.log(error);
    }
  },
  async deletePrivatedata(ctx) {
    const id = ctx.params.id;
    try {
      const result = await strapi
        .service("api::client.client")
        .deletePrivatedata(id);
      ctx.body = result;
    } catch (error) {
      console.log(error);
      ctx.body = { error: "Error deleting data" };
    }
  },

  async updatePrivatedata(ctx) {
    const id = ctx.params.id;
    const data = ctx.request.body;
    try {
      const result = await strapi
        .service("api::client.client")
        .updatePrivatedata(data, id);
      ctx.body = result;
    } catch (error) {
      console.log(error);
      ctx.body = { error: "Error updating data" };
    }
  },
}));
