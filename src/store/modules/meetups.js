import Vue from 'vue-native-core'
import axios from 'axios'
import { Platform } from 'react-native'



const BASE_URL = Platform.OS === 'ios' ? 'http://localhost:3001/api/v1' 
                                       : 'http://10.0.2.2:3001/api/v1'



export default {
    namespaced: true,

    state: {
        items: [],
        item: {}

    },
    getters: {

    },
    actions: {
        fetchMeetups({commit, state}) {
            // return axios.get(`http://10.0.2.2:3001/api/v1/meetups`)
            return axios.get(`${BASE_URL}/meetups`)
              .then(res => {
                  const meetups = res.data
                  commit('setItems',{items: meetups, resource: 'meetups'}, {root:true})
                  return state.items
              })
        },
        fetchMeetupById ({commit, state}, meetupId) {
            commit('setMeetup', {})
            return axios.get(`${BASE_URL}/meetups/${meetupId}`)
              .then(res => {
                  const meetup = res.data
                  commit('setMeetup', meetup)
                  return state.item
              })
        }

    },
    mutations: {
      
        setMeetup (state, meetup) {
            Vue.set(state, 'item', meetup)
        }

    }


}