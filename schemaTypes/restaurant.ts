import {defineType} from 'sanity'

export default defineType({
  name: 'restaurant',
  title: 'Restaurant',
  type: 'document',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Restaurant Name',
      validation: (rule) => rule.required(),
    },
    {
      name: 'description',
      type: 'string',
      title: 'Restaurant Description',
      validation: (rule) => rule.max(200),
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image of the restaurant',
    },
    {
      name: 'lat',
      type: 'number',
      title: 'Latitude of the restaurant',
    },
    {
      name: 'lng',
      type: 'number',
      title: 'Longitude of the restaurant',
      validation: (rule) => rule.required(),
    },
    {
      name: 'address',
      type: 'string',
      title: 'Restaurant Address',
      validation: (rule) => rule.required(),
    },
    {
      name: 'rating',
      type: 'number',
      title: 'Rating',
      description: 'Enter a value between 1 and 5',
      validation: (rule) =>
        rule.required().min(1).max(5).error('Please enter a value between 1 and 5'),
    },
    {
      name: 'reviews',
      type: 'string',
      title: 'Reviews',
    },
    {
      name: 'type',
      type: 'reference',
      to: [{type: 'category'}],
      title: 'Category',
      validation: (rule) => rule.required(),
    },
    {
      name: 'dishes',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'Dish'}]}],
      title: 'Dishes',
      validation: (rule) => rule.required(),
    },
  ],
})
