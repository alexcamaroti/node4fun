const db = require('../../config/database');
const RecipeDAO = require('../dao/recipe-dao');
module.exports = (app) => {
app.get("/", function(req, resp){

    const recipeDAO = new RecipeDAO(db);
    recipeDAO.list()
                .then(recipes => resp.marko(
                    require('../views/recipes/list/list.marko'), 
                    {
                     recipes : recipes 
                    }
                ))
                .catch(err => console.log(err));
    });

app.get("/recipes/form", function(req, resp) {
    resp.marko(require('../views/recipes/form/form.marko'))
    });

app.post("/recipes", function(req, resp) {
    console.log(req.body);
    });
}