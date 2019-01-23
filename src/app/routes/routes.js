const db = require('../../config/database');
const RecipeDAO = require('../dao/recipe-dao');
module.exports = (app) => {

const recipeDAO = new RecipeDAO(db);
app.get("/", function(req, resp){

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
    recipeDAO.add(req.body)
            .then(resp.redirect("/"))  
            .catch(error => console.log(error));              
    });

app.delete('/recipes/:id', function(req, resp) {
    recipeDAO.remove(req.params.id)
    .then(() => resp.status(200).end())
    .catch(error => console.log(error));

    });    
}