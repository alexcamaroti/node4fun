class RecipeDAO {

    constructor(db){
        this._db = db;
    }

    list() {
        return new Promise((resolve, reject) => {
            this._db.all('SELECT * FROM recipes', 
            function(err, result) {
                if(err) return reject("It was not possible to show the recipes.")
    
                resolve(result)
            });
        })
    }
}

module.exports = RecipeDAO;