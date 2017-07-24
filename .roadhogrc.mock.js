const mock = {};
const path = require('path');

require('fs').readdirSync(path.join(`${__dirname}/mock`)).forEach((file) => {
    Object.assign(mock, require(`./mock/${file}`))
});

export default mock;