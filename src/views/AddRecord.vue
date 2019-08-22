<template>
  <v-app>
    <v-container>
      <v-menu lazy :close-on-content-click="true" transition="v-scale-transition" offset-y>
        <v-text-field required slot="activator" label="Play Date" v-model="playdate"></v-text-field>
        <v-date-picker no-title v-model="playdate"></v-date-picker>
      </v-menu>

      <v-select :items="this.$store.state.girls" label="Used Character" v-model="girl"></v-select>
      <v-select :items="this.$store.state.stages" label="Stage" v-model="stage"></v-select>
      <v-select :items="this.$store.state.player_ranks" label="Player Rank" v-model="player_rank"></v-select>
      <v-select :items="this.victory_items" label="Result" v-model="victory"></v-select>

      <v-btn color="success" @click="submit()">Submit</v-btn>
      <v-btn color="info" @click="initialize()">Initialize</v-btn>

      <v-snackbar v-model="snackbar" color="success" timeout="3000" right vertical>
        Register a record.
        <v-btn color="blue" flat @click="snackbar = false">Close</v-btn>
      </v-snackbar>
    </v-container>
  </v-app>
</template>

<script lang="ts">
import { Vue, Prop, Component } from "vue-property-decorator";
import { WarRecord } from "../scripts/record/record";
import { Victory } from "../scripts/record/victory";
import { Girl } from "../scripts/girl/girl";
import * as Moment from "moment";

@Component({
  computed: {
    mode: function() {
      return this.editRecord ? "Edit" : "Add";
    }
  },
  methods: {
    submit: function(e) {
      if (
        !this.playdate ||
        !this.girl ||
        !this.stage ||
        !this.player_rank ||
        !this.victory
      ) {
        //TODO: announce require values
        return;
      }
      var new_record = new WarRecord(
        new Date(this.playdate),
        new Date(),
        this.girl,
        this.stage,
        this.player_rank,
        this.victory
      );
      this.$store.state.record_manager.insert(new_record);
      this.initialize();
      this.snackbar = true;
    },
    initialize: function(e) {
      this.playdate = "";
      this.girl = "";
      this.stage = "";
      this.player_rank = "";
      this.victory = "";
    }
  }
})
export default class AddRecord extends Vue {
  playdate = Moment(new Date()).format("YYYY-MM-DD");
  girl = "";
  stage = "";
  player_rank = "";
  victory = "";
  snackbar = false;

  victory_items = Object.entries(Victory).map(([k, v]) => v);

  @Prop({ required: false }) editRecord!: WarRecord;
}
</script>
