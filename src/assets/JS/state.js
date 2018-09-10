const State = {
  history: {
    targetId: false,
    recent: [],
    archive: [],
    counter: 10
  },
  create: {
    createExpression: [],
    genExpression: [],
    genState: 2,
    selected: false
  },
  // editor: {
  //   editCollection: {
  //     root: new EditObj({ op: '+-', content: [] })
  //   },
  //   editNumbers: [],
  //   parentheses: false
  // },
  expression: {
    UI: {
      expand: false,
      compress: false,
      showFactorsById: ''
    },
    expressionCollection: {
      colId: 0,
      byId: {
        col_0: {
          changes: 0,
          expId: 1,
          exp_0: {
            value: false,
            op: '+'
          }
        }
      }
    }
  }
};

export { State as default };
