const { BannerPlugin } = require('webpack');

// Hardcoding here (and not reading from package.json) as the files are built
// before the version is updated in package.json
const version = '1.2.1';

const banner =
    '/*!\n' +
    ` * Keen UI v${version} (https://github.com/JosephusPaye/keen-ui)\n` +
    ` * (c) ${new Date().getFullYear()} Josephus Paye II\n` +
    ' * Released under the MIT License.\n' +
    ' */';

const isBuildingLib = Boolean(process.env.KEEN_UI_BUILD_LIB);

module.exports = {
    css: {
        extract: isBuildingLib ? false : true,
    },
    productionSourceMap: isBuildingLib ? false : true,
    configureWebpack: {
        plugins: [
            new BannerPlugin({
                banner,
                raw: true,
                entryOnly: true,
            }),
        ],
        performance: {
            hints: false,
        },
    },
};
