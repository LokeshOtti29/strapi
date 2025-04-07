"use strict";

module.exports = {
  routes: [
    {
      method: "GET",
      path: "/projects/get",
      handler: "project.getProjectdata",
      config: {
        auth: false,
      },
    },
    {
      method: "GET",
      path: "/projects/get/:id",
      handler: "project.getoneProjectdata",
      config: {
        auth: false,
      },
    },
    {
      method: "POST",
      path: "/projects/post",
      handler: "project.postProjectdata",
      config: {
        auth: false,
      },
    },
    {
      method: "PUT",
      path: "/projects/put/:id",
      handler: "project.updateProjectdata",
      config: {
        auth: false,
      },
    },
    {
      method: "DELETE",
      path: "/projects/delete/:id",
      handler: "project.deleteProjectdata",
      config: {
        auth: false,
      },
    },
  ],
};
