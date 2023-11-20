import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import { addNewTodo, cleanMain, getAllTodos } from './todoFunctions';
import { populateStorage } from './localStorage';

// console.log('src/index.js');

populateStorage();


const container = document.getElementById('container');
container.appendChild(getAllTodos());

const addNew = document.getElementById('navAddNew');
addNew.addEventListener('click', addNewTodo);

const tabViewAll = document.getElementById('navViewAll');
tabViewAll.addEventListener('click', getAllTodos);