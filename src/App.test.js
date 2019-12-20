import React from 'react';
import { render , cleanup} from '@testing-library/react';
import App, {getMapGroupBy} from './App';

afterEach(cleanup);


test('renders learn react link', () => {
  const { getByTestId } = render(<App />);
  const linkElement = getByTestId("app");
  expect(linkElement).toBeInTheDocument();
});

test('getMapGroupBy with an empty array and undefined field to group,  return an empty map' , () => {
  // GIVEN
  const array = [];
  const field = undefined;
  // WHEN
  const result = getMapGroupBy(array, field);
  // THEN
  expect(result.size).toBe(0);
});

test('getMapGroupBy with an array and an undefined field to group, return an empty map' , () => {
  // GIVEN
  const array = [{a:1,b:2}, {a:3,b:4}];
  const field = undefined;
  // WHEN
  const result = getMapGroupBy(array, field);
  // THEN
  expect(result.size).toBe(0);
});

test('Given an Array and a group by field, When getMapGroupBy, Then map has a key' , () => {
  // GIVEN
  const array = [{a:1,b:2}, {a:1,b:4}, {a:2, b:5}];
  const field = 'a';
  // WHEN
  const result = getMapGroupBy(array, field);
  // THEN
  expect(result.has(1)).toBeTruthy();
  expect(result.has(2)).toBeTruthy();
  expect(result.size).toBe(2);
});