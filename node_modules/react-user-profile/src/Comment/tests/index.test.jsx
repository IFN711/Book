import { getFormattedTimestamp } from '../index';

describe('<Comment />', () => {
  const now = Date.now();

  const second = 1000;
  const minute = 60 * second;
  const hour = 60 * minute;
  const day = 24 * hour;

  test('displays time as minutes only up to 59 minutes', () => {
    const contains = 'm';

    expect(getFormattedTimestamp(now)).toEqual(expect.stringContaining(contains));
    expect(getFormattedTimestamp(now - 59 * minute)).toEqual(expect.stringContaining(contains));
    expect(getFormattedTimestamp(now - 60 * minute)).not.toEqual(expect.stringContaining(contains));
  });

  test('displays time as hours only from 1 to 23 hours', () => {
    const contains = 'h';

    expect(getFormattedTimestamp(now - hour)).toEqual(expect.stringContaining(contains));
    expect(getFormattedTimestamp(now - 23 * hour)).toEqual(expect.stringContaining(contains));
    expect(getFormattedTimestamp(now - 24 * hour)).not.toEqual(expect.stringContaining(contains));
  });

  test('displays time as days from 24 hours', () => {
    const contains = 'd';

    expect(getFormattedTimestamp(now - day)).toEqual(expect.stringContaining(contains));
    expect(getFormattedTimestamp(now - 100 * day)).toEqual(expect.stringContaining(contains));
  });
});
