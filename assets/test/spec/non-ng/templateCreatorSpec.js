"use strict";

describe("TemplateCreator", function(){

  describe("formOutputToTemplate", function(){

    it("should transform empty form", function(){
      var result = formOutputToTemplate({});

      expect(result).toEqual({
       "kind": "Template",
       "apiVersion": "v1",
       "metadata": {
        "name": ""
       }
     });
    });

    it("should set template name", function(){
      var result = formOutputToTemplate({
        name: "foo"
      });

      expect(result).toEqual({
         "kind": "Template",
         "apiVersion": "v1",
         "metadata": {
          "name": "foo"
         }
       });
    });

  });

});
