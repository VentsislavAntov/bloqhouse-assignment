import Vuex from "vuex";

export default new Vuex.Store({
  state: {
    dba: {
      properties: [
        {
          id: 1,
          name: "Countryside house",
          location: "Amsterdam",
          totalValue: 500000,
          totalShares: 1000,
          availableShares: 539,
          img: "https://source.unsplash.com/178j8tJrNlc",
          description: "Countryside house built in the 1980s",
        },
        {
          id: 2,
          name: "Modern two-storey apartment",
          location: "London",
          totalValue: 750000,
          totalShares: 5000,
          availableShares: 607,
          img: "https://source.unsplash.com/yFV39g6AZ5o",
          description:
            "Contemporary architecture located in the outskirts of London",
        },
        {
          id: 3,
          name: "House with pool",
          location: "Barcelona",
          totalValue: 1200000,
          totalShares: 100000,
          availableShares: 0,
          img: "https://source.unsplash.com/2d4lAQAlbDA",
          description: "Summer house with lavish pool",
        },
        {
          id: 4,
          name: "Village house",
          location: "Berlin",
          totalValue: 275000,
          totalShares: 1000,
          availableShares: 872,
          img: "https://source.unsplash.com/IYfp2Ixe9nM",
          description:
            "Cozy cottage with remote location. Optimal for families",
        },
      ],
    },
    dbb: {
      properties: [
        {
          id: 1,
          name: "School science equipment",
          category: "Charity",
          projectGoal: 650000,
          totalSlots: 10000,
          availableSlots: 2450,
          img: "https://source.unsplash.com/gKUC4TMhOiY",
          description: "Provide microscopes for 10 schools in Africa",
        },
        {
          id: 2,
          name: "Educational robotics",
          category: "Tech",
          projectGoal: 250000,
          totalSlots: 5000,
          availableSlots: 2890,
          img: "https://source.unsplash.com/5Bo6OfopSi0",
          description:
            "Learning material and hardware for high schools teaching the basics of robotics",
        },
        {
          id: 3,
          name: "DIY workshops",
          category: "DIY",
          projectGoal: 150000,
          totalSlots: 150000,
          availableSlots: 0,
          img: "https://source.unsplash.com/9OKGEVJiTKk",
          description:
            "Organising workshops in the local community house for visually impaired people",
        },
        {
          id: 4,
          name: "VR architecture tours",
          category: "Tech",
          projectGoal: 500000,
          totalSlots: 1000,
          availableSlots: 872,
          img: "https://source.unsplash.com/NN9HQkDgguc",
          description:
            "Take virtual tours around the most famous buildings in the world",
        },
      ],
    },
  },
  mutations: {
    setDba: (state, payload) => {
      const availableSharesCurrent = state.dba.properties.find(
        (x) => x.id === parseInt(payload.passedId)
      ).availableShares;
      state.dba.properties.find(
        (x) => x.id === parseInt(payload.passedId)
      ).availableShares = availableSharesCurrent - parseInt(payload.newAmount);
    },
    setDbb(state, payload) {
      const availableSlotsCurrent = state.dbb.properties.find(
        (x) => x.id === parseInt(payload.passedId)
      ).availableSlots;
      state.dbb.properties.find(
        (x) => x.id === parseInt(payload.passedId)
      ).availableSlots = availableSlotsCurrent - parseInt(payload.newAmount);
    },
  },
  getters: {
    getDba(state) {
      return state.dba;
    },
    getDbb(state) {
      return state.dbb;
    },
    getDbaById: (state) => (passedId) => {
      return state.dba.properties.find((x) => x.id === parseInt(passedId));
    },
    getDbbById: (state) => (passedId) => {
      return state.dbb.properties.find((x) => x.id === parseInt(passedId));
    },
  },
});
