<template>
  <RecordList :records="this.$store.state.record_manager.LatestN(10)"></RecordList>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import RecordList from "./RecordList.vue";
import { JsonFileRecordReader } from "../scripts/io/file-reader";

@Component({
  components: {
    RecordList
  }
})
export default class Home extends Vue {}
</script>