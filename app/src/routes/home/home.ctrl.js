'use strict';

const output = {
  hello: (req, res) => {
    res.end(`<body>Hello C World!!!!!!</body>`);
    // res.end(`Hello C World!!`);
    // res.json(`!!!!alive with ${process.env.NODE_ENV}`)
  },

  test: (req, res) => {
    console.log('/test start');
    res.json(`Good Job!`);
  },
};

export { output };
