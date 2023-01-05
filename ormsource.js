// eslint-disable-next-line @typescript-eslint/no-var-requires
const config = require('./src/ormconfig');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const DataSource = require('typeorm').DataSource;

const source = new DataSource(config);

export default source;
