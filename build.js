#!/usr/bin/env node
var cmd = require('commander');
var rulebook = require('./rulebook.js');

cmd
  .arguments('<rulesets...>')
  .action((rulesets) => {
    console.log(JSON.stringify(rulebook.buildRulesets(rulesets)));
  });

cmd.parse(process.argv);
