"use strict";

const output = {
    hello: (req, res) => {
        res.json(`alive with ${process.env.NODE_ENV}`)
    },
    
    test: (req, res) => {
        console.log('/test start');
        res.json(`Good Job!`);
    }
}

export {
    output
};