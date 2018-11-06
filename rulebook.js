var fs = require('fs');

exports.buildRulesets = (filenames) => {
  return filenames.map(exports.buildRuleset);
}

exports.buildRuleset = (filename) => {
  var blob  = fs.readFileSync(filename, 'utf8');
  var rules = blob.split("\n\n").map(exports.buildRule);
  return {
    name:  filename,
    rules: rules
  }
}

exports.buildRule = (blob) => {
  var lines = blob.split("\n");
  var rule  = { match: lines };
  if (lines.length > 1) {
    rule.suggest = lines.pop();
  }
  return rule;
}
