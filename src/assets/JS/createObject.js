const defaults = { op: '±', content: [] };
export class createBlock {
  constructor(params) {
    Object.assign(this, defaults, params);
  }
}
