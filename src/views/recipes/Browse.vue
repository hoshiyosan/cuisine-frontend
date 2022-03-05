<template>
  <v-container>
    <v-row>
      <!-- search recipe by name -->
      <v-text-field
        label="Search recipe"
        append-icon="mdi-magnify"
      ></v-text-field>
      <!-- toggle search in publicly available recipes -->
      <v-switch
        label="show only my recipes"
        color="orange"
        hide-details
      ></v-switch>
      <!-- show advanced search options -->
      <!-- <v-btn>
        <v-icon>mdi-tune</v-icon>
      </v-btn> -->
    </v-row>
    <v-row style="justify-content: left">
      <v-card
        class="recipe-card"
        v-for="recipe in filteredRecipes"
        :key="recipe.uid"
      >
        <template slot="progress">
          <v-progress-linear
            color="deep-purple"
            height="10"
            indeterminate
          ></v-progress-linear>
        </template>

        <v-img
          height="250"
          src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
        ></v-img>

        <v-card-title>Cake à la banane</v-card-title>
        <v-card-subtitle>
          <v-icon>mdi-account</v-icon>
          Sylvan LE DEUNFF
        </v-card-subtitle>

        <v-card-text>
          <v-row align="center" class="mx-0">
            <v-rating
              :value="4.5"
              color="amber"
              dense
              half-increments
              readonly
              size="14"
            ></v-rating>

            <div class="grey--text ms-4">4.5 (413)</div>
          </v-row>
        </v-card-text>

        <v-divider class="mx-4"></v-divider>

        <v-card-actions>
          <v-btn
            color="deep-purple lighten-2"
            :to="{ name: 'EditRecipe', params: { recipeUID: recipe.uid } }"
            text
          >
            Edit
          </v-btn>
          <v-btn
            color="deep-purple lighten-2"
            :to="{ name: 'RecipeDetail', params: { recipeUID: recipe.uid } }"
            text
          >
            View
          </v-btn>
          <v-btn
            color="deep-purple lighten-2"
            @click="openAddRecipeDialog(recipe.uid)"
            text
          >
            To cart
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-row>
    <v-btn
      fab
      bottom
      right
      absolute
      color="primary"
      :to="{ name: 'RecipeSuggestion' }"
    >
      <v-icon>mdi-lightbulb-on</v-icon>
    </v-btn>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    filteredRecipes: [
      {
        uid: "best-recipe-1234",
      },
      {
        uid: "good-recipe-5678",
      },
      {
        uid: "bad-recipe-5432",
      },
      {
        uid: "excellent-recipe-666",
      },
    ],
  }),
  methods: {
    openAddRecipeDialog(recipeUID) {
      console.log(recipeUID);
    },
  },
};
</script>

<style scoped>
@media screen and (max-width: 530px) {
  .recipe-card {
    width: 98%;
    margin: 1%;
  }
}

@media screen and (min-width: 530px) and (max-width: 800px) {
  .recipe-card {
    width: 48%;
    margin: 1%;
  }
}

@media screen and (min-width: 800px) and (max-width: 800px) {
  .recipe-card {
    width: 31.33%;
    margin: 1%;
  }
}

@media screen and (min-width: 1264px) {
  .recipe-card {
    width: 23%;
    margin: 1%;
  }
}
</style>
