"use strict";

const hello = (req, res) => {
    res.json(`alive with ${process.env.NODE_ENV}`)
};

const test = (req, res) => {
    console.log('/test start');
    res.json(`Good Job!`);
};

export {
    hello,
    test
};