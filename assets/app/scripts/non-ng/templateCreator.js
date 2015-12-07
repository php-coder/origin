"use strict";

function formOutputToTemplate(data) {
  return {
    "kind": "Template",
    "apiVersion": "v1",
    "metadata": {
     "name": data.name || ""
    }
  };
}
