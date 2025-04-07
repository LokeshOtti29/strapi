"use strict";

/**
 * project service
 */
const { factories } = require("@strapi/strapi");

const { createCoreService } = factories;

module.exports = createCoreService("api::project.project", ({ strapi }) => ({
  async getProjectdata() {
    return await strapi.entityService.findMany("api::project.project");
  },

  async getoneProjectdata(id) {
    return await strapi.entityService.findOne("api::project.project", id);
  },

  async postProjectdata(data) {
    return await strapi.entityService.create("api::project.project", {
      data: {
        ...data,
      },
    });
  },

  async deleteProjectdata(id) {
    return await strapi.entityService.delete("api::project.project", id);
  },

  async updateProjectdata(data, id) {
    return await strapi.entityService.update("api::project.project", id, {
      data: {
        ...data,
      },
    });
  },
}));
