

<template>
  <nb-container v-if="isMeetupLoaded">
    <view :style="styles.container">
      <nb-h1 :style="styles.headerOne">
          {{meetup.title}}
      </nb-h1>

      <nb-thumbnail :source="{uri: meetupCreator.avatar}" />
      <nb-text :style="styles.label">
          by {{meetupCreator.name | upperCase}}
      </nb-text>
    </view>

    <nb-content>
      <nb-card>
        <nb-tabs>
          <nb-tab heading="Details">
            <MeetupDetailInfo :meetup="meetup" />
          </nb-tab>
          <nb-tab heading="Threads">
            <MeetupThreads :threads="threads" />
          </nb-tab>
          <nb-tab heading="Joined People">
            <MeetupPeople :people="meetup.joinedPeople"/>
          </nb-tab>
        </nb-tabs>
      </nb-card>
    </nb-content>
  </nb-container>
</template>

<script>
import MeetupDetailInfo from "@/components/MeetupDetailInfo";
import MeetupThreads from '@/components/MeetupThreads'
import MeetupPeople from '@/components/MeetupPeople'
import styles from "@/styles";
import threads from '../store/modules/threads';
export default {
  components: {
    MeetupDetailInfo,
    MeetupThreads,
    MeetupPeople
  },
  props: {
    navigation: {
      type: Object
    }
  },
  data() {
    return {
      styles
    };
  },
  computed: {
    meetup() {
      return this.$store.state.meetups.item;
    },
    threads () {
        return this.$store.state.threads.items
    },
    isMeetupLoaded() {
      return Object.keys(this.meetup).length > 0;
    },

    meetupCreator() {
      return this.meetup.meetupCreator || {};
    }
  },

  created() {
    const meetupId = this.navigation.getParam("meetupId", "undefined");

    this.$store.dispatch("meetups/fetchMeetupById", meetupId)
    this.$store.dispatch("threads/fetchThreads", meetupId)

  }
};
</script>


<style>
</style>