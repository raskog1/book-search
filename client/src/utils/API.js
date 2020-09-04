import axios from "axios";

export default {
  searchAll: function(search) {
    let query = `https://www.googleapis.com/books/v1/volumes?q=${search}`;

    axios.get(query).then((response) => {
      console.log(response.data);
      // Returning data only
      return response.data;
    });
  },

  searchId: function(req, res) {
    let query = `https://www.googleapis.com/books/v1/volumes?q=${req}`;
    // Returning a function that returns a promise, so I can use .then
    return axios.get(query);
  },
};
