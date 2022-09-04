const isAll = process.env.npm_config_files === '**';

module.exports = {
    'watermarks': {
        'lines': [90, 95],
        'functions': [90, 95],
        'branches': [90, 95],
        'statements': [90, 95],
    },
    'reporter': isAll ? 'lcov' : 'text',
};
