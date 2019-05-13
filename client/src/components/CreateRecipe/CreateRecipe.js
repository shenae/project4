import React, { Component } from 'react';
import NavBar from '../NavBar/NavBar'
  
class CreateRecipe extends Component {

  constructor(props) {
    super(props);
    this.state = {
      recipeTitle:null,
      prepTime:null,
      cookingTime:null,
      servings:null,
      ingredients:null,
      directions:null,
      picture:null,
      cuisines:null
    };
  }

    onChange = e => {
    const {
     target: { value, name },
    } = e;
    this.setState({
     [name]: value
    });
  };


  render() {
    return (
        <div>
          {/*navbar*/}
          <NavBar />
          <h1>Create/Update a Recipe</h1>

          <form className="flex-column">
              <label>Recipe Title</label>
              <input name="recipeTitle" onChange={this.onChange} placeholder="Recipe Title"/>
              <label>Prep Time</label>
              <input name="prepTime" onChange={this.onChange} placeholder="Prep Time"/>
              <label>Cooking Time</label>
              <input name="cookingTime" onChange={this.onChange} placeholder="Cooking Time"/>
              <label>Servings</label>
              <input name="servings" onChange={this.onChange} placeholder="Servings"/>
              <label>Ingredients</label>
              <input name="ingredients" onChange={this.onChange} placeholder="Ingredients"/>
              <label>Directions</label>
              <input name="directions" onChange={this.onChange} placeholder="Directions"/>
              <label>Picture</label>
              <input name="directions" onChange={this.onChange} placeholder="Directions"/>
              <label>Cuisines</label>
              <input name="cuisines" onChange={this.onChange} placeholder="CuisineType"/>
              <button>Submit</button>
          </form>


        </div>
    );
  }
}

export default CreateRecipe;