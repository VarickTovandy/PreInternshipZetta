import { WhitespaceRemovalPipe } from './whitespace-removal.pipe';

describe('WhitespaceRemovalPipe', () => {
  it('create an instance', () => {
    const pipe = new WhitespaceRemovalPipe();
    expect(pipe).toBeTruthy();
  });
});
