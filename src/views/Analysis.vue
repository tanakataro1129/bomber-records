<template>
  <UsageRate></UsageRate>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import UsageRate from "./charts/UsageRate.vue";
import { JsonFileRecordReader } from "../scripts/io/file-reader";

@Component({
  components: {
    UsageRate
  }
})
export default class Analysis extends Vue {}
</script>