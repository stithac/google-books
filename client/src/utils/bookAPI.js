import axios from "axios";

export default {
    search: function(param) {
        return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + param);
    },
    saveBook: function(id) {
        return axios.post(`/${id}`);
    }
};