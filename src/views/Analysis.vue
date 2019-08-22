<template>
  <v-app>
    <v-container fluid grid-list-md>
      <v-layout row wrap class="align-center">
        <v-flex d-flex xs12 sm6 md6>
          <v-layout row wrap class="align-center">
            <v-flex>
              <v-layout row wrap class="align-center">
                <v-flex xs4>
                  <p>イベントから期間を選択</p>
                </v-flex>
                <v-flex xs8>
                  <v-select
                    :items="this.$store.state.events"
                    label="Choose event"
                    v-model="bomber_event"
                    @change="changeEvent()"
                  ></v-select>
                </v-flex>
                <v-flex xs6>
                  <v-menu
                    lazy
                    :close-on-content-click="true"
                    transition="v-scale-transition"
                    offset-y
                  >
                    <v-text-field required slot="activator" label="開始期間" v-model="lower_date"></v-text-field>
                    <v-date-picker no-title v-model="lower_date" @change="changeLower()"></v-date-picker>
                  </v-menu>
                </v-flex>
                <v-flex xs6>
                  <v-menu
                    lazy
                    :close-on-content-click="true"
                    transition="v-scale-transition"
                    offset-y
                  >
                    <v-text-field required slot="activator" label="終了期間" v-model="upper_date"></v-text-field>
                    <v-date-picker no-title v-model="upper_date" @change="changeUpper()"></v-date-picker>
                  </v-menu>
                </v-flex>
              </v-layout>
            </v-flex>
            <v-flex>
              <v-layout row wrap>
                <v-flex d-flex xs4>
                  <v-card color="red lighten-2" dark>
                    <v-card-text @click="graph_type = 'UsageRate'">UsageRate</v-card-text>
                  </v-card>
                </v-flex>
                <v-flex d-flex xs4>
                  <v-card color="red lighten-2" dark>
                    <v-card-text @click="graph_type = ''">GraphType2</v-card-text>
                  </v-card>
                </v-flex>
                <v-flex d-flex xs4>
                  <v-card color="red lighten-2" dark>
                    <v-card-text @click="graph_type = ''">GraphType3</v-card-text>
                  </v-card>
                </v-flex>
                <v-flex d-flex xs4>
                  <v-card color="red lighten-2" dark>
                    <v-card-text @click="graph_type = ''">GraphType4</v-card-text>
                  </v-card>
                </v-flex>
                <v-flex d-flex xs4>
                  <v-card color="red lighten-2" dark>
                    <v-card-text @click="graph_type = ''">GraphType5</v-card-text>
                  </v-card>
                </v-flex>
                <v-flex d-flex xs4>
                  <v-card color="red lighten-2" dark>
                    <v-card-text @click="graph_type = ''">GraphType6</v-card-text>
                  </v-card>
                </v-flex>
              </v-layout>
            </v-flex>
          </v-layout>
        </v-flex>
        <v-flex d-flex xs12 sm6 md6>
          <v-card color="indigo" dark>
            <UsageRate
              v-if="graph_type == 'UsageRate'"
              :lower_date="lower_date"
              :upper_date="upper_date"
            ></UsageRate>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import UsageRate from "./charts/UsageRate.vue";
import { JsonFileRecordReader } from "../scripts/io/file-reader";
import * as Moment from "moment";

@Component({
  components: {
    UsageRate
  },
  methods: {
    changeEvent: function(e) {
      if (this.bomber_event) {
        this.lower_date = Moment(this.bomber_event.start).format("YYYY-MM-DD");
        this.upper_date = Moment(this.bomber_event.end).format("YYYY-MM-DD");
      }
    },

    changeLower: function(e) {
      if (this.upper_date && this.lower_date > this.upper_date) {
        this.lower_date = this.upper_date;
      }
      if (this.bomber_event) {
        this.bomber_event = "";
      }
    },

    changeUpper: function(e) {
      if (this.lower_date && this.upper_date < this.lower_date) {
        this.upper_date = this.lower_date;
      }
      if (this.bomber_event) {
        this.bomber_event = "";
      }
    }
  }
})
export default class Analysis extends Vue {
  spec_term = false;
  lower_date = "";
  upper_date = "";
  bomber_event = "";
  graph_type = "";
}
</script>