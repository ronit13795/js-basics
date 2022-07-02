const underscore = require('underscore');
let result = underscore.groupBy(['mom', 'dad', 'daniel', 'ronit'], 'length');
console.log(result);