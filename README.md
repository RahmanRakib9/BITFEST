# API Documentation
## Overview
This document provides detailed information about the APIs developed for managing ingredients and recipes in the backend system.

### Ingredient APIs
1. GET /ingredients
```
[
  {
    "id": "12345",
    "name": "Tomato",
    "quantity": 5,
    "unit": "pcs",
  }
]
```

2. POST /ingredients
```
{
  "name": "Tomato",
  "quantity": 5,
  "unit": "pcs"
}
```
### Response
```
{
  "id": "12345",
  "name": "Tomato",
  "quantity": 5,
  "unit": "pcs",
}
```

3. PATCH /ingredients/:id
```
{
  "quantity": 10
}
```
### Response
```
{
  "id": "12345",
  "name": "Tomato",
  "quantity": 10,
  "unit": "pcs",
  "updatedAt": "2024-12-21T12:00:00Z"
}
```
### Recipe APIs
4. GET /recipes
```
[
  {
    "id": "67890",
    "title": "Tomato Soup",
    "ingredients": [
      { "name": "Tomato", "quantity": 5, "unit": "pcs" },
      { "name": "Salt", "quantity": 1, "unit": "tsp" }
    ],
    "steps": ["Chop tomatoes", "Boil water", "Add ingredients and cook"],
    "category": "Soup",
  }
]
```
5. POST /recipes
```
{
  "title": "Tomato Soup",
  "ingredients": [
    { "name": "Tomato", "quantity": 5, "unit": "pcs" },
    { "name": "Salt", "quantity": 1, "unit": "tsp" }
  ],
  "steps": ["Chop tomatoes", "Boil water", "Add ingredients and cook"],
  "category": "Soup"
}
```
### Response
```
{
  "id": "67890",
  "title": "Tomato Soup",
  "ingredients": [
    { "name": "Tomato", "quantity": 5, "unit": "pcs" },
    { "name": "Salt", "quantity": 1, "unit": "tsp" }
  ],
  "steps": ["Chop tomatoes", "Boil water", "Add ingredients and cook"],
  "category": "Soup",
  "createdAt": "2024-12-21T10:00:00Z"
}
```
6. POST /recipes/parse
```
{
  "text": "Tomato Soup\nTomato - 5 - pcs\nSalt - 1 - tsp\nStep: Chop tomatoes\nStep: Boil water\nStep: Add ingredients and cook\n"
}
```
### Response
```
{
  "message": "Recipes added successfully"
}
```
