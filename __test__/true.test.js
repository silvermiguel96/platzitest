import {isTrue, isNull, isFalse, isUndefined } from '../true';

describe('Testing for results null', () => {
  test('null', () => {
    expect(isNull()).toBeNull();
  });
});

describe('Testing for result true', () => {
  test('null', () => {
    expect(isTrue()).toBeTruthy();
  });
});

describe("Testing for result False", () => {
  test('false', () => {
    expect(isFalse()).toBeFalsy();
  });
});

describe("Testing for result undefined", () => {
  test('undefined', () => {
    expect(isUndefined()).toBeUndefined();
  });
});

describe("Testing for Truthy or Falsy", () => {
  test('False or true', () => {
    expect(isFalse()).not.toBeTruthy();
  })
})