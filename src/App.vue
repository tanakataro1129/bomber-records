<template>
  <v-app>
    <TopToolbar></TopToolbar>

    <v-content>
      <router-view></router-view>
    </v-content>

    <BottomNav></BottomNav>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import TopToolbar from "./components/TopToolbar.vue";
import BottomNav from "./components/BottomNav.vue";
import { WarRecord } from "./scripts/record/record";
import { Victory } from "./scripts/record/victory";

@Component({
  components: {
    TopToolbar,
    BottomNav
  }
})
export default class extends Vue {
  mounted() {
    var records = this.$store.state.records;
  }
}
</script>