export default {
  name: 'recipe',
  type: 'document',
  title: 'Recipe',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
    },
    {
      name: 'mealType',
      title: 'Meal Type',
      type: 'string',
      options: {
        list: ['full', 'main', 'side']
      }
    },
    {
      name: 'mainIngredients',
      title: 'Main Ingredients',
      type: 'array',
      of: [{type: 'string'}],
    },
    {
      name: 'servings',
      title: 'Servings',
      type: 'number',
    },
    {
      name: 'prepTime',
      title: 'Prep Time (minutes)',
      type: 'number',
    },
    {
      name: 'cookTime',
      title: 'Cook Time (minutes)',
      type: 'number',
    },
    {
      name: 'calories',
      title: 'Calories',
      type: 'number',
    },
    {
      name: 'ingredients',
      title: 'Ingredients',
      type: 'array', 
      of: [{type: 'block'}]
    },
    {
      name: 'instructions',
      title: 'Instructions',
      type: 'array', 
      of: [{type: 'block'}]
    },
    {
      name: 'notes',
      title: 'Notes',
      type: 'array', 
      of: [{type: 'block'}]
    },
    {
      name: 'reference',
      title: 'Reference',
      type: 'url',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
    }
  ]
}