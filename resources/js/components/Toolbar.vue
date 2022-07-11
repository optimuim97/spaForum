<template>
  <v-card

    tile
  >
  <div>
  </div>
    <v-toolbar>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title text="upper">AGNANINI</v-toolbar-title>

      <v-spacer></v-spacer>
          <div
              class="hidden-sm-and-down"
          >
            <v-btn text> Forum </v-btn>
            <v-btn text> Pose Ta Question </v-btn>

            <router-link to="/category">
              <v-btn text> Les Categories </v-btn>
            </router-link>

            <router-link to="/login">
              <v-btn text> Se Connecter </v-btn>
            </router-link>

          </div>
    </v-toolbar>
  </v-card>
</template>

<script>

</script>
