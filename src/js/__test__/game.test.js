/* eslint-disable linebreak-style */
import sortArmy from '../game';

test('check army health', () => {
  const army = [
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
  ];
  const expected = [
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 10 },
  ];
  const received = sortArmy(army);
  expect(received).toEqual(expected);
});
