import React, { Component } from 'react';
	
class RecipeList extends Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {

    const {categories, cuisines, directions, id, ingredients, name, picture_url,rating,userId} = this.props.recipe;
    const {handleDelete} = this.props;

    return (
        <div>
          <img src={picture_url}/>
          <p>{name}</p>
          <p>{cuisines}</p>
          <button onClick={e => handleDelete(e, id)}>DELETE</button>
        </div>
    );
  }
}

export default RecipeList;