"use strict";

module.exports = {
  routes: [
    {
      method: "GET",
      path: "/clients/get",
      handler: "client.getPrivatedata",
      config: {
        auth: false,
      },
    },
    {
      method: "GET",
      path: "/clients/get/:id",
      handler: "client.getonePrivatedata",
      config: {
        auth: false,
      },
    },
    {
      method: "POST",
      path: "/clients/post",
      handler: "client.postPrivatedata",
      config: {
        auth: false,
      },
    },
    {
      method: "PUT",
      path: "/clients/put/:id",
      handler: "client.updatePrivatedata",
      config: {
        auth: false,
      },
    },
    {
      method: "DELETE",
      path: "/clients/delete/:id",
      handler: "client.deletePrivatedata",
      config: {
        auth: false,
      },
    },
  ],
};
