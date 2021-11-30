<template>
  <div class="search-component">
    <span>
      <label>Search for places...</label>
      <div class="inputs-container">
        <select v-model="userState">
          <option v-for="state in states" :key="state">{{ state }}</option>
        </select>
        <input type="text" v-model="userCity" />
      </div>
    </span>
    <button @click="searchCityId">Search</button>
    {{ cityId }}
    {{ cityWeather }}
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Search",

  data: () => {
    return {
      states: [
        "AC",
        "AL",
        "AP",
        "AM",
        "BA",
        "CE",
        "DF",
        "ES",
        "GO",
        "MA",
        "MT",
        "MS",
        "MG",
        "PA",
        "PB",
        "PR",
        "PE",
        "PI",
        "RJ",
        "RN",
        "RS",
        "RO",
        "RR",
        "SC",
        "SP",
        "SE",
        "TO",
      ],
      userState: "",
      userCity: "",
      cityId: null,
      cityWeather: null,
    };
  },

  methods: {
    searchCityId() {
      axios
        .get(
          `http://apiadvisor.climatempo.com.br/api/v1/locale/city?name=${this.userCity}&state=${this.userState}&token=34dcc14aa1845432cb9f69f534f089e0`
        )
        .then((response) => (this.cityId = response.data[0].id))
        .catch((error) => console.log(error));

      // Segunda consulta está retornando com erro
      axios
        .get(
          `/api/v1/forecast/locale/:3496/hours/72?token=34dcc14aa1845432cb9f69f534f089e0`
        )
        .then((response) => (this.cityWeather = response.data))
        .catch((error) => console.log(error));
    },
  },
};

// methods: {
//     getCityId() {
//       axios
//         .get(
//           `http://apiadvisor.climatempo.com.br/api/v1/locale/city?name=${this.userCity}&state=${this.userState}&token=34dcc14aa1845432cb9f69f534f089e0`
//         )
//         .then((response) => (this.cityInfo = response.data[0]))
//         .catch((err) => console.log(err));
//     },

//     getCityWeather(id) {
//       axios
//         .get(
//           `/api/v1/forecast/locale/:${id}/days/15?token=34dcc14aa1845432cb9f69f534f089e0`
//         )
//         .then((response) => (this.cityWeather = response))
//         .catch((err) => console.log(err));
//     },
//   },
</script>

<style lang="scss" scoped>
.search-component {
  width: 40vw;
  margin: 0 auto;
  padding: 1.5rem;
  border-radius: 15px;
  background-color: var(--cambridge-blue);

  display: flex;
  flex-direction: column;
  gap: 1rem;

  & > span {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    & > label {
      color: rgb(68, 68, 68);
      font-weight: 600;
    }

    & > .inputs-container {
      width: 100%;
      display: flex;
      justify-content: space-between;
      gap: 2rem;

      & > select {
        padding: 0.5rem 1rem;
        border: none;
        border-radius: 10px;
        width: 20%;
      }

      & > input {
        padding: 0.5rem 1rem;
        border: none;
        border-radius: 10px;
        outline: none;
        width: 80%;
      }
    }

    // & > input {
    //   padding: 0.5rem 1rem;
    //   border: none;
    //   border-radius: 5px;
    //   outline: none;
    // }
  }

  & > button {
    padding: 0.3rem 0;
    width: 30%;
    margin: 0 auto;
    background-color: var(--laurel-green);
    border: none;
    border-radius: 10px;
    cursor: pointer;
  }
}
</style>
