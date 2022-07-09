import './style.css';
import build from './createLandingPage';
import infoPage from './personalInfo';
import {validate,populateForm} from './validateInputs'
import championPage from './selectPage'


if(!localStorage.getItem('page') || localStorage.getItem('page')==='landing'){
    build();
} else if(localStorage.getItem('page')==='personal'){
    build()
    infoPage()
    populateForm()
} else {
    build()
    infoPage()
    populateForm()
    championPage()
}
