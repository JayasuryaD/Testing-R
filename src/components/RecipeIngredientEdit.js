import React from 'react'

export default function RecipeIngredientEdit(props) {
  const {ingredient ,handleIngredientChange} = props;

  function handleRecipes(changes){
    handleIngredientChange(ingredient.id,{...ingredient ,...changes})
  }

  return (
    <>
      <input
        className="recipe-edit__input"
        type="text"
        onInput={(e)=> handleRecipes({name:e.target.value})}
        value={ingredient.name}
      />
      <input
        className="recipe-edit__input"
        type="text"
        value={ingredient.amount}
        onInput={e => handleRecipes({amount:e.target.value})}
      />
      <button className="btn btn--danger">&times;</button>
    </>
  )
}
