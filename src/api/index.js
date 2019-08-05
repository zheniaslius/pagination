import axios from 'axios';

const getUsers = async () => await axios.get('http://dev.frevend.com/json/users.json');

export default {
  getUsers
};