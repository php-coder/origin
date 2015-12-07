"use strict";

function formOutputToTemplate(data) {
  _.defaults(data, {
    name: "",
    description: "",
    tags: "",
  });

  return {
    "kind": "Template",
    "apiVersion": "v1",
    "metadata": {
     "name": data.name,
     "annotations": {
       "description": data.description,
       "tags": data.tags
     }
    }
  };
}
