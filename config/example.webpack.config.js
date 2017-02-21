const webpack = require('webpack');
const path = require('path');
const WebpackNotifierPlugin = require('webpack-notifier');
const uglifySaveLicense = require("uglify-save-license");

const env = process.env.NODE_ENV
const isProduction = env === "production";

const webpackPlugins = [
    new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),
    new WebpackNotifierPlugin({alwaysNotify: true}),
];

if (isProduction){
    //圧縮
    console.log("!!!")
    webpackPlugins.push(new webpack.optimize.UglifyJsPlugin({
        output: { comments: uglifySaveLicense }   // リリースビルドのみ uglify する
    }));
}

console.log("isProduction : " + isProduction)

module.exports = {
    target : "web",
    entry: {
        bundle : [/*"babel-polyfill", */ './docs/ts/Sample.tsx']
    },
    output: {
        filename: 'docs/js/sample-build.js',
    },
    // Turn on sourcemaps
    devtool: isProduction ? false : 'inline-source-map' ,
    cache:true,
    resolve: {
        extensions: [ '.webpack.js', '.web.js', ".pcss" , '.css', '.ts', '.js' , '.tsx' , 'png' , 'jpg' , 'jpeg' , 'gif', 'svg'],
        alias: {
            //'react': 'react-lite',
            //'react-dom': 'react-lite',
        },
        modules : ['node_modules'] /*  追加 */
    },
    // Add minification
    plugins: webpackPlugins,
    module: {
        rules: [
            {
                test: /\.ts(x?)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader : "babel-loader",
                        options: {
                            presets: [
                                "es2015",
                                ["env", {
                                    browsers: ["last 2 versions"]
                                }]
                            ],
                            plugins: ["transform-runtime" , "transform-es2015-block-scoping"]
                        }
                    },
                    {
                        loader : "ts-loader",
                        options : {
                            compiler: 'typescript',
                            "compilerOptions": {
                                "jsx": "react",
                                "module": "commonjs",
                                "sourceMap" : false,
                                "target" : "es5",
                                "allowJs" : true,
                                "pretty" : true,
                                "experimentalDecorators": true,
                                "removeComments": true,
                                "moduleResolution": "node",
                                "strictNullChecks": true,
                                "skipLibCheck": true,     // ビルド高速化（型定義内の型チェック無効化）
                                "alwaysStrict" : true,
                                "types": [
                                    "node"
                                ],
                                "lib": [
                                    "es2015",// 使用する標準型定義の指定（ target が ES5, ES2015 以外の場合に必要）
                                    "es2017",
                                    "dom",
                                    "dom.iterable",
                                    "scripthost"
                                ],
                            },
                            "exclude": [
                                "node_modules",
                                "src",
                                "test",
                                "config",
                                "build",
                                "lib",
                            ]

                        }
                    }
                ]
            },
            {
                test: /\.(css|pcss)$/,
                use : [
                    {
                        loader:"style-loader"
                    },
                    {
                        loader: "css-loader",
                        options: {
                            modules: true,
                            localIdentName: "[local]--testApp-[hash:base64:10]",
                            sourceMap: false,
                            importLoaders: 1,
                            url : false
                        },
                    },
                    {
                        loader:"postcss-loader",
                        options : {
                            ident: 'postcss',
                            plugins: ()=> [
                                require("postcss-import"),
                                require('postcss-cssnext'),
                                require('postcss-flexbugs-fixes'),
                            ]
                        }
                    }
                ]
            },
        ]
    },
    externals: {
        //CDNで読み込むやつはここで除外しとくと良い
        'react': 'React',
        'react-dom': 'ReactDOM',
        //'react-router': 'ReactRouter',
        'react-addons-transition-group': 'React.addons.TransitionGroup',
        'react-addons-pure-render-mixin': 'React.addons.PureRenderMixin',
        'react-addons-create-fragment': 'React.addons.createFragment',
        'react-addons-update': 'React.addons.update',

    },
    performance: {
        hints: false
    }
}
