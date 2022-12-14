module.exports = function (api) {
    api.cache(false);
    return {
        "sourceMap": "both",
        "retainLines": true,
        "presets": [
            [
                "@babel/preset-env",
                {
                    "targets": {
                        "node": "current"
                    }
                }
            ],
            [
                "@babel/preset-typescript"
            ]
        ],
        "plugins": [
            [
                "@babel/plugin-proposal-decorators",
                {
                    "legacy": true
                }
            ],
            [
                "@babel/plugin-proposal-class-properties",
                {
                    "legacy": true
                }
            ]
        ],
        "exclude": [
            /node_modules/
          ]  
    }
};
