/*jslint nomen: true */
var nopt = require('nopt'),
    config = nopt({ coverage: Boolean }),
    coverageRequired = config.coverage,
    port = 8888;

console.log('Starting server at: http://localhost:' + port);
if (!coverageRequired) {
    console.log('Coverage NOT turned on, run with --coverage to turn it on');
}
require('./server-instrument').start(port, coverageRequired);

