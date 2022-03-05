<template>
  <div>
    <div v-for="shelve of ingredientsByShelve" :key="shelve.name">
      <h2>{{ shelve.name }}</h2>
      <div v-for="ingredient in shelve.ingredients" :key="ingredient.uid">
        <div>
          {{ ingredient.name }} ({{ ingredient.quantity }}
          {{ ingredient.unit }})
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    ingredientsByShelve: [
      {
        name: "Viande / Volaille",
        ingredients: [
          { uid: "chicken", name: "Chicken", quantity: 200, unit: "g" },
        ],
      },
      {
        name: "Epicerie",
        ingredients: [
          { uid: "coco milk", name: "Coco milk", quantity: 3, unit: "cl" },
        ],
      },
      {
        name: "Légumes",
        ingredients: [
          { uid: "tomatoes", name: "Tomatoes", quantity: 2, unit: null },
          { uid: "oignons", name: "Oignons", quantity: 2, unit: null },
        ],
      },
    ],
  }),
};
</script>
