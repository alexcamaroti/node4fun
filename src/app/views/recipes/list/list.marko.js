// Compiled using marko@4.14.18 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/br.com.camaroti.alex.node$1.0.0/src/app/views/recipes/list/list.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    component_globals_tag = marko_loadTag(require("marko/src/components/taglib/component-globals-tag")),
    marko_forEach = marko_helpers.f,
    marko_escapeXml = marko_helpers.x,
    marko_attr = marko_helpers.a,
    init_components_tag = marko_loadTag(require("marko/src/components/taglib/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/taglibs/async/await-reorderer-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<!DOCTYPE html><html lang=\"en\"><head><meta charset=\"UTF-8\"><meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"><meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\"><title>WineHouse</title></head><body>");

  component_globals_tag({}, out);

  out.w("<h1>Welcome to Winehouse website.</h1><table id=\"tbRecipe\"><thead><tr><th>Id</th><th>Recipe</th><th>Price</th><th>Edit</th><th>Delete</th></tr></thead>");

  var for__16 = 0;

  marko_forEach(data.recipes, function(recipe) {
    var keyscope__17 = "[" + ((for__16++) + "]");

    out.w("<tbody><tr" +
      marko_attr("id", "recipe_" + recipe.id) +
      "><td>" +
      marko_escapeXml(recipe.id) +
      "</td><td>" +
      marko_escapeXml(recipe.name) +
      "</td><td>" +
      marko_escapeXml(recipe.price) +
      "</td><td><a" +
      marko_attr("href", "/recipes/form/" + recipe.id) +
      ">Edit</a></td><td><a href=\"#\"" +
      marko_attr("data-href", "" + recipe.id) +
      " data-type=\"remove\">Delete</a></td></tr></tbody>");
  });

  out.w("</table><script src=\"/static/js/remove-recipe.js\"></script>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "28");

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/br.com.camaroti.alex.node$1.0.0/src/app/views/recipes/list/list.marko",
    tags: [
      "marko/src/components/taglib/component-globals-tag",
      "marko/src/components/taglib/init-components-tag",
      "marko/src/taglibs/async/await-reorderer-tag"
    ]
  };
