import ErrorRepository from '../src';

test('Error repository constructor1', () => {
  const errorRepository = new ErrorRepository();

  expect(errorRepository.translate(1)).toBe('ошибка 1');
});

test('Error repository constructor2', () => {
  const errorRepository = new ErrorRepository();

  expect(errorRepository.translate(2)).toBe('ошибка 2');
});

test('Error repository constructor3', () => {
  const errorRepository = new ErrorRepository();

  expect(errorRepository.translate(3)).toBe('Unknown error');
});
