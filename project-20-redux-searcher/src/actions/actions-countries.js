//ACTIONS
export const GET_COUNTRIES = 'GET_COUNTRIES';
export const GET_COUNTRY = 'GET_COUNTRY';
export const DELETE_COUNTRY = 'DELETE_COUNTRY';
export const SEARCH_COUNTRIES = 'SEARCH_COUNTRIES';
export const SET_CONTINENT = 'SET_CONTINENT';

//ACTION CREATORS
//showing/listing countries
export function getCountries() {
    return {
        type: GET_COUNTRIES
    }
  }
  //deleting countries
export function deleteCountry(id) {
    return {
        type: DELETE_COUNTRY,
        id
    }
}
//showing one country
export function getCountry(id) {
    return{
        type: GET_COUNTRY,
        id
    }
}
//searching cuntries
export function searchCountres(searchText) {
    return{
        type: SEARCH_COUNTRIES,
        searchText
    }
}
//show countries of specified continent
export function setContinent(name) {
    return{
        type: SET_CONTINENT,
        name
    }
}