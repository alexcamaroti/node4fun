// Compiled using marko@4.14.18 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/br.com.camaroti.alex.node$1.0.0/src/app/views/recipes/form/form.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_attr = marko_helpers.a,
    marko_loadTag = marko_helpers.t,
    component_globals_tag = marko_loadTag(require("marko/src/components/taglib/component-globals-tag")),
    init_components_tag = marko_loadTag(require("marko/src/components/taglib/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/taglibs/async/await-reorderer-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<!DOCTYPE html><html lang=\"en\"><head><meta charset=\"UTF-8\"><meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"><meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\"><title>Form Recipe</title><form action=\"/recipes\" method=\"post\">");

  if (data.recipe.id) {
    out.w("<div><input type=\"hidden\" name=\"_method\" value=\"PUT\"><input type=\"hidden\" id=\"id\" name=\"id\"" +
      marko_attr("value", "" + data.recipe.id) +
      "></div>");
  }

  out.w("<input type=\"text\" id=\"name\" name=\"name\" placeholder=\"Name\"" +
    marko_attr("value", "" + data.recipe.name) +
    "><input type=\"number\" id=\"price\" name=\"price\" placeholder=\"Price\"" +
    marko_attr("value", "" + data.recipe.price) +
    "><input type=\"text\" id=\"description\" name=\"description\" placeholder=\"Description\"" +
    marko_attr("value", "" + data.recipe.description) +
    "><button type=\"submit\">Save</button></form></head><body>");

  component_globals_tag({}, out);

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "15");

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/br.com.camaroti.alex.node$1.0.0/src/app/views/recipes/form/form.marko",
    tags: [
      "marko/src/components/taglib/component-globals-tag",
      "marko/src/components/taglib/init-components-tag",
      "marko/src/taglibs/async/await-reorderer-tag"
    ]
  };
