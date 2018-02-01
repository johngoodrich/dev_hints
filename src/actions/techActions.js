import * as types from "./actionTypes";

const generateID = () =>
  "_" +
  Math.random()
    .toString(36)
    .substr(2, 9);

export function addTech(tech) {
  tech.id = generateID();
  return { type: types.ADD_TASK, tech };
}

export function addHint(tech) {
  tech.id = generateID();
  return { type: types.ADD_HINT, tech };
}

export function editTech(tech) {
  return { type: types.EDIT_TECH, techID };
}

export function editHint(tech) {
  return { type: types.EDIT_HINT, techID };
}

export function getTasks() {
  return { type: types.GET_TECH, payload: null };
}
