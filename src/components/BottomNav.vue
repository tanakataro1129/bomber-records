<template>

  <v-bottom-nav app fixed :value="true">

    <v-btn flat color="primary" :to="{ path: '/'}">
      <span>Home</span>
      <v-icon>home</v-icon>
    </v-btn>

    <v-btn flat color="primary" :to="{ name: 'add-record'}">
      <span>Add Record</span>
      <v-icon>note_add</v-icon>
    </v-btn>

    <v-btn flat color="primary" :to="{ name: 'search-records'}">
      <span>Search Records</span>
      <v-icon>search</v-icon>
    </v-btn>

    <v-btn flat color="primary" :to="{ name: 'analysis'}">
      <span>Analysis</span>
      <v-icon>assessment</v-icon>
    </v-btn>

  </v-bottom-nav>

</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  @Component
  export default class BottomNav extends Vue {
  }
</script>