import mod from './/methods';
const defaults = {
  createBlock: { op: '±', content: [] },
  createNumber: { op: '+', value: 1 },
  container: { operator: '+', id: 'exp_null', root: false },
  fraction: { op: '±', numerator: [], denominator: [] }
};

export class createBlock {
  constructor(args) {
    Object.assign(this, defaults.createBlock, args);
  }
}

export class createNumber {
  constructor(args) {
    Object.assign(this, defaults.createNumber, args);
  }
}

//call this container, and the other BlockContainer
export class ContainerObject {
  //keep root stuff here
  constructor(args) {
    Object.assign(this, defaults.container, args);
  }
}
export class Fraction {
  constructor(args) {
    Object.assign(this, defaults.fraction, args);
  }
}

export class Num {
  constructor({ value = 1, operator = '+', id = 'exp_null' }) {
    this.value = value;
    this.op = operator;
    this.pow = [1];
    this.id = id;
    this.root = false;
    this.factor = mod.factorize(value ? value : 1);
    this.nested = [];
    this.parentId;
  }
  setRoot() {
    Object.assign(this, {
      root: true,
      value: false,
      factor: false,
      op: false,
      id: 'root'
    });
    return this;
  }
  setProperty(prop, value) {
    if (
      this.hasOwnProperty(prop) &&
      (value || value === false || value === 0)
    ) {
      this[prop] = value;
    }
    return this;
  }

  setParentId(id) {
    this.parentId = id;
    return this;
  }

  setValue(value) {
    if (this.nested.length > 0) {
      return this;
    } else if (value || value === false || value === 0) {
      this.value = value;
      this.factor = mod.factorize(this.value || 1);
    }
  }

  isDetached(i = 0) {
    let det = [];
    if (i + 1 >= this.nested.length) {
      det.push(true);
    } else {
      det.push(['+', '-'].includes(this.nested[i + 1].op) ? true : false);
    }
    if (i - 1 <= this.nested.length) {
      det.push(true);
    } else {
      det.push(['+', '-'].includes(this.nested[i + 1].op) ? true : false);
    }
    return det;
  }

  index() {
    return this.id.slice(-1)[0];
  }

  add(i) {
    let cur = this.nested[i];
    let prev = this.nested[i - 1];
    if (!cur.getNest() && !prev.getNest()) {
      if (!this.isDetached(cur.index()).every(x => x === true)) return;
      console.log('normal addition');
      let newValue = cur.op === '+' ? cur.value : -1 * cur.value;
      newValue += prev.op === '+' ? prev.value : -1 * prev.value;
      prev.setValue(newValue);
      cur.remove = true;
      if (prev.value < 0) {
        prev.setValue(-1 * prev.value);
        prev.op = '-';
      } else if (prev.value) {
        prev.op = '+';
      } else {
        prev.remove = true;
      }
      if (this.nested.length === 2 && !this.root && !prev.remove) {
        prev.setProperty('op', this.op === prev.op ? '+' : '-');
        this.parentMethod([prev], this.index(), 1);
      }
    } else if (cur.getNest()) {
      console.log('nested addition');
      cur.nested.forEach(x => {
        if (['+', '-'].includes(x.op)) {
          x.setProperty('op', x.op !== cur.op ? '-' : '+');
        }
      });
      this.addExpression(cur.nested, cur.index(), 1);
    }
    this.clearRemoved();
  }

  mul(i) {
    console.log('multiplier');
    let cur = this.nested[i];
    let prev = this.nested[i - 1];
    if (!cur.getNest() && !prev.getNest()) {
      prev.setValue(prev.value * cur.value);
      cur.setRemove();
    } else {
      if (cur.getNest() && !prev.getNest()) {
        console.log('current nested, prev not nested');
        mod.multiplier(prev.value, cur);
        cur.setProperty('op', prev.op);
        prev.setRemove();
      } else if (!cur.getNest() && prev.getNest()) {
        mod.multiplier(cur.value, prev);
        cur.setRemove();
      } else {
        console.log('not dual nest');
      }
    }
    this.clearRemoved();
  }

  //this is not needed, nothing operates on nest anymore
  doNestedOperation(f = false) {
    if (!f && this.nested && this.nested.length < 1) return;
    this.nested.forEach(x => x.setValue(false, f.bind(null, this.value)));
    this.parentMethod(this.nested, this.id.pop(), 1);
  }

  expand() {
    this.parentMethod([mod.expand(this)], this.id[this.id.length - 1], 1);
  }
  compress() {
    this.parentMethod([mod.compress(this)], this.id[this.id.length - 1], 1);
  }
  Commander(i = 0, inpt = 'default') {
    if (inpt === 'default') {
      if (this.nested.length < 2) return;
      switch (this.nested[i].op) {
        case '+':
        case '-':
          this.add(i);
          break;
        case '*':
          this.mul(i);
          break;
        default:
          break;
      }
    } else if (inpt === 'expand') {
    } else if (inpt === 'compress') {
    }
  }
}

export class NumObj {
  constructor(val = 'notSet', op = false, par = false) {
    this.value = val === 'notSet' ? false : val * 1;
    this.op = op;
    this.parentheses = par;
    this.nested = [];
  }
  addValue(v = 'notSet') {
    console.group('addValue group');
    if (v === 'notSet') return;
    if (v === false) {
      this.value = false;
    } else if (this.value === 'notSet' || this.value === false) {
      console.log('notSet or false');
      this.value = v * 1;
    } else {
      console.log('real value');
      this.value = this.value + '' + v;
      this.value *= 1;
    }
    console.groupEnd();
    return this;
  }
  getLast() {
    if (this.nested.length > 0) {
      return this.nested.slice(-1)[0];
    }
    return false;
  }
  changeSign(s = false) {
    if (!s) return;
    switch (s) {
      case '+':
        this.value *= this.value < 0 ? -1 : 1;
        break;
      case '-':
        this.value *= this.value < 0 ? 1 : -1;
        break;
      default:
        break;
    }
  }

  changeOp(o = 'notSet') {
    if (o === 'notSet') return;
    switch (o) {
      case '*':
        this.op = o;
        break;
      case '/':
        this.op = o;
        break;
      case '-':
        this.op = o;
        break;
      case '+':
        this.op = o;
        break;
      default:
        break;
    }
    return this;
  }
}
