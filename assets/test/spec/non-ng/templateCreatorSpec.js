"use strict";

describe("TemplateCreator", function(){

  describe("formOutputToTemplate", function(){

    it("should transform empty form", function(){
      var result = formOutputToTemplate({});

      expect(result).toEqual({
       "kind": "Template",
       "apiVersion": "v1",
       "metadata": {
        "name": "",
        "annotations": {
          "description": "",
          "tags": "",
        }
       }
     });
    });

    it("should transform form", function(){
      var result = formOutputToTemplate({
        name: "foo",
        description: "Foo",
        tags: "foo,bar"
      });

      expect(result).toEqual({
         "kind": "Template",
         "apiVersion": "v1",
         "metadata": {
          "name": "foo",
          "annotations": {
            "description": "Foo",
            "tags": "foo,bar",
          }
         }
       });
    });

  });

});
