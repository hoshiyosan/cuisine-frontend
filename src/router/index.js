import Vue from "vue";
import VueRouter from "vue-router";

import Home from "@/views/Home";
import Friends from "@/views/Friends";

import BrowseRecipes from "@/views/recipes/Browse";
import RecipeDetail from "@/views/recipes/Detail";
import EditRecipe from "@/views/recipes/Edit";
import RecipeSuggestion from "@/views/recipes/Suggestion";

import Shopping from "@/views/Shopping";
import Cook from "@/views/Cook";
import Kitchen from "@/views/Kitchen";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: { title: "CookQuick" },
  },
  {
    path: "/friends",
    name: "Friends",
    component: Friends,
    meta: { title: "Friends" },
  },
  {
    path: "/recipes",
    name: "Recipes",
    redirect: { name: "BrowseRecipes" },
  },
  {
    path: "/recipes/browse",
    name: "BrowseRecipes",
    component: BrowseRecipes,
    meta: { title: "Recipes" },
  },
  {
    path: "/recipes/:recipeUID/detail",
    name: "RecipeDetail",
    component: RecipeDetail,
    meta: { title: "RecipeDetail" },
  },
  {
    path: "/recipes/:recipeUID/edit",
    name: "EditRecipe",
    component: EditRecipe,
    meta: { title: "EditRecipe" },
  },
  {
    path: "/recipes/suggestion",
    name: "RecipeSuggestion",
    component: RecipeSuggestion,
    meta: { title: "Suggestion" },
  },
  {
    path: "/shopping",
    name: "Shopping",
    component: Shopping,
    meta: { title: "Shopping" },
  },
  {
    path: "/cook",
    name: "Cook",
    component: Cook,
    meta: { title: "Cook" },
  },
  {
    path: "/kitchen",
    name: "Kitchen",
    component: Kitchen,
    meta: { title: "Kitchen" },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
