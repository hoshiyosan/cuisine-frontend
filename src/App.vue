<template>
  <v-app>
    <!-- <v-navigation-drawer app color="red">
    </v-navigation-drawer> -->

    <v-app-bar app color="primary" dark>
      <v-toolbar-title>CookQuick - {{ viewTitle }}</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text>
        <v-icon>mdi-power</v-icon>
        logout
      </v-btn>
    </v-app-bar>

    <v-main>
      <v-container fluid>
        <!-- If using vue-router -->
        <router-view></router-view>
      </v-container>
    </v-main>

    <v-bottom-navigation background-color="orange">
      <v-btn
        v-for="item in menuItems"
        :key="item.label"
        :to="{ name: item.view }"
      >
        <v-img
          class="menu-icon"
          :src="require(`@/assets/menu-icons/${item.icon}`)"
        />
        <span>{{ item.label }}</span>
      </v-btn>
    </v-bottom-navigation>

    <!-- <BottomNavigationMenu app /> -->
  </v-app>
</template>

<script>
// import BottomNavigationMenu from "@/layers/BottomNavigationMenu";

export default {
  name: "App",

  components: {
    // BottomNavigationMenu,
  },

  mounted() {
    console.log(this.$route);
  },

  watch: {
    $route: {
      immediate: true,
      handler(newView) {
        this.viewTitle = newView.meta.title;
      },
    },
  },

  data: () => ({
    viewTitle: null,
    menuItems: [
      {
        label: "Friends",
        icon: "friends.png",
        view: "Friends",
      },
      {
        label: "Recipes",
        icon: "recipes.png",
        view: "Recipes",
      },
      {
        label: "Shopping",
        icon: "shopping.png",
        view: "Shopping",
      },
      {
        label: "Cook",
        icon: "cook.png",
        view: "Cook",
      },
      {
        label: "Kitchen",
        icon: "fridge.png",
        view: "Kitchen",
      },
    ],
  }),
};
</script>

<style>
.menu-icon {
  max-width: 40px !important;
  max-height: 40px !important;
}
</style>
