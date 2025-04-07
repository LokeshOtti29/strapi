"use strict";

/**
 * project controller
 */

const { factories } = require("@strapi/strapi");

const { createCoreController } = factories;
module.exports = createCoreController("api::project.project", ({ strapi }) => ({
  async getProjectdata(ctx) {
    try {
      const find = await strapi
        .service("api::project.project")
        .getProjectdata();
      ctx.body = find;
    } catch (error) {
      console.log(error);
    }
  },
  async getoneProjectdata(ctx) {
    const id = ctx.params.id;
    try {
      const find = await strapi
        .service("api::project.project")
        .getoneProjectdata(id);
      ctx.body = find;
    } catch (error) {
      console.log(error);
    }
  },
  async postProjectdata(ctx) {
    const data = ctx.request.body;
    try {
      const find = await strapi
        .service("api::project.project")
        .postProjectdata(data);
      ctx.body = find;
    } catch (error) {
      console.log(error);
    }
  },
  async deleteProjectdata(ctx) {
    const id = ctx.params.id;
    try {
      const result = await strapi
        .service("api::project.project")
        .deleteProjectdata(id);
      ctx.body = result;
    } catch (error) {
      console.log("Delete Error:", error);
      ctx.throw(500, "Failed to delete project data");
    }
  },

  async updateProjectdata(ctx) {
    const id = ctx.params.id;
    const data = ctx.request.body;
    try {
      const result = await strapi
        .service("api::project.project")
        .updateProjectdata(data, id);
      ctx.body = result;
    } catch (error) {
      console.log("Update Error:", error);
      ctx.throw(500, "Failed to update project data");
    }
  },
}));
