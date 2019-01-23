let tbRecipes = document.querySelector('#tbRecipe');
tbRecipes.addEventListener('click', (event) => {
    let elementClicked = event.target;

    if(elementClicked.dataset.type == 'remove') {
        let recipeId = elementClicked.dataset.href;
        fetch(`http://localhost:3000/recipes/${recipeId}`, { method: 'DELETE'})
        .then(response => {
            let tr = elementClicked.closest(`#recipe_${recipeId}`);
            tr.remove(); 

        })
        .catch(err => console.log(err));
    }

});
