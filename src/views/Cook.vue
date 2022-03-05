<template>
  <v-container>
    <h2>{{ recipe.name }}</h2>

    <v-row>
      <v-col>
        <div style="width: 200px; height: 150px">
          <v-img
            src="https://assets.afcdn.com/recipe/20120820/65368_w768h583c1cx192cy256.webp"
          />
        </div>
        <h3>Ingrédients</h3>
        <ul>
          <li v-for="ingredient in ingredients" :key="ingredient.name">
            {{ ingredient.name }} ({{ ingredient.quantity }}
            {{ ingredient.unit }})
          </li>
        </ul>
      </v-col>
      <v-col>
        <h3>Etapes</h3>
        <ul>
          <li
            v-for="(step, index) in recipe.steps"
            :key="index"
            :class="{ active: index === currentStep }"
          >
            {{ step }}
          </li>
        </ul>
        <div style="position: relative; margin-top: 2em">
          <v-btn
            fab
            bottom
            left
            absolute
            color="primary"
            @click="previousStep()"
            v-if="currentStep > 0"
          >
            <v-icon>mdi-arrow-left</v-icon>
          </v-btn>
          <v-btn fab bottom right absolute color="primary" @click="nextStep()">
            <v-icon>mdi-arrow-right</v-icon>
          </v-btn>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    diners: 1,
    currentStep: 1,
    recipe: {
      name: "Picata romana",
      ingredients: [
        { name: "lardons", quantity: 50, unit: "g" },
        { name: "oignons", quantity: 0.5, unit: null },
        { name: "poivrons", quantity: 0.5, unit: null },
        { name: "crême fraîche", quantity: 20, unit: "cl" },
        { name: "poulet", quantity: 10, unit: "g" },
        { name: "chorizzo", quantity: 20, unit: "g" },
      ],
      steps: [
        "Eplucher les oignons et les émincer. Réserver.",
        "Laver, couper et épépiner les poivrons. Les émincer également. Réserver.",
        "Eplucher le chorizo et le couper en tranches fines ou en cubes suivant le goût.",
        "Faire revenir les lardons dans une sauteuse. Quand ils commencent à dorer, ajouter les oignons et les faire fondre avec les lardons. Une fois les oignons cuits, égoutter le mélanger et le réverver. ",
        "Essuyer la sauteuse avec un morceau de papier absorbant et la remettre sur le feu en y ajoutant un filet d'huile d'olive. Faire revenir les filets de poulet et ajouter les poivrons émincés, une fois que le poulet prend de la couleur. ",
        "Ajouter le mélange oignons-lardons et mélanger.",
        "Dès que le poulet est cuit, ajouter la crème fraiche, les morceaux de chorizo, ainsi que la ciboulette hâchée.",
        "Laisser mijoter encore quelques minutes et assaisonner suivant le goût.",
      ],
    },
  }),
  computed: {
    ingredients() {
      return this.recipe.ingredients.map((ingredient) => {
        return {
          name: ingredient.name,
          quantity: ingredient.quantity * this.diners,
          unit: ingredient.unit,
        };
      });
    },
  },
  methods: {
    previousStep() {
      if (this.currentStep > 0) {
        this.currentStep--;
      }
    },
    nextStep() {
      if (this.currentStep < this.recipe.steps.length - 1) {
        this.currentStep++;
      } else {
        alert("done!");
      }
    },
  },
};
</script>

<style scoped>
li.active {
  font-weight: bold;
}
</style>
