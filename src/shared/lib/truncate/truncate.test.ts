import { truncate } from './truncate';

describe('truncate function', () => {
  it('should truncate a string if it exceeds the maximum length', () => {
    const str = 'This is a test string';
    const maxLength = 10;
    const truncatedStr = truncate(str, maxLength);
    expect(truncatedStr).toBe('This is a...');
  });

  it('should return the original string if its length is less than or equal to the maximum length', () => {
    const str = 'Short string';
    const maxLength = 15;
    const truncatedStr = truncate(str, maxLength);
    expect(truncatedStr).toBe(str);
  });
});
