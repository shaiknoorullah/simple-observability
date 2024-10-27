import { expect } from 'chai';

import { add } from '../../src/utils/add';

describe('add function', () => {
  // writing tests for dummy test function
  it('should add two positive numbers correctly', () => {
    expect(add(2, 3)).to.equal(5);
  });

  it('should add a positive and a negative number correctly', () => {
    expect(add(5, -2)).to.equal(3);
  });

  it('should add two negative numbers correctly', () => {
    expect(add(-3, -7)).to.equal(-10);
  });

  it('should add zero correctly', () => {
    expect(add(0, 5)).to.equal(5);
    expect(add(5, 0)).to.equal(5);
  });
});
