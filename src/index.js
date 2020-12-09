export default class ErrorRepository {
  constructor() {
    this.members = new Map([
      [1, 'ошибка 1'],
      [2, 'ошибка 2'],
    ]);
  }

  translate(code) {
    if (this.members.has(code)) {
      return this.members.get(code);
    }
    return 'Unknown error';
  }
}
