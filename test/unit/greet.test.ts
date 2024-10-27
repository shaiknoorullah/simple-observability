import { expect } from 'chai';
import { spy } from 'sinon';

import { greet } from '../../src/utils/greet';

describe('greet function', () => {
  it('should return a greeting message', () => {
    const name = 'John';
    const result = greet(name);
    expect(result).to.equal('Hello, John!');
  });

  it('should call the greet function once', () => {
    const greetSpy = spy(greet);
    greetSpy('Jane');
    expect(greetSpy.calledOnce).to.be.true;
    expect(greetSpy.firstCall.args[0]).to.equal('Jane');
  });
});
