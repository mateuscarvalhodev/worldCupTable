import axios from 'axios';

const api = axios.create({
  baseURL: 'https://estagio.getpostenergy.com/WorldCup/GetAllTeams'
});