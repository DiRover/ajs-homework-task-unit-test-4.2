/* eslint-disable linebreak-style */
export default function sortArmy(army) {
  army.sort((a, b) => (a.health > b.health ? -1 : 1));
  return army;
}
