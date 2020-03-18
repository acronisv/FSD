const path = require('path');
const fs = require('fs');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// Main consts
const PATHS = {
    src: path.join(__dirname, '../src'),
    dist: path.join(__dirname, '../dist'),
    assets: 'assets/'
}

// Pages const for HtmlWebpackPlugin
const PAGES_DIR = `${PATHS.src}/pug/pages/`;
// For using pug files
const PAGES = fs.readdirSync(PAGES_DIR).filter(fileName => fileName.endsWith('.pug'));

// For using standart html files
// const PAGES = fs
//   .readdirSync(PAGES_DIR)
//   .filter(fileName => fileName.endsWith(".html"));

module.exports = {
    externals: {
        paths: PATHS
    },
    entry: {
        app: PATHS.src,
        colors: `${PATHS.src}/pug/pages/colors/colors.js`
    },
    output: {
        path: PATHS.dist,
        filename: `${PATHS.assets}js/[name].js`,
        publicPath: '/'
    },
    module: {
        rules:[
            {
                test: /\.pug$/,
                loader: 'pug-loader',
                options: {
                    pretty: true
                }
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
                
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]'
                }
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]'
                }
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true,
                        },
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: true, config: {path: `./postcss.config.js`}
                        },
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true,
                        },
                    },
                  ],
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true,
                        },
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: true, config: {path: `./postcss.config.js`}
                        },
                    },
                ],
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: `${PATHS.assets}css/[name].css`
        }),

        // Uncomment for using standart html files
        // new HtmlWebpackPlugin({
        //     hash: false,
        //     template: `${PATHS.src}/index.html`,
        //     filename: './index.html',
        //     //inject: false
        // }),
        new CopyWebpackPlugin([
            { 
                from: `${PATHS.src}/${PATHS.assets}img`,
                to: `${PATHS.assets}img`
            },
            { 
                from: `${PATHS.src}/${PATHS.assets}fonts`,
                to: `${PATHS.assets}fonts`
            },
            {
                from: `${PATHS.src}/static`,
                to: ''
            }
        ]),

        // For using pug files
        ...PAGES.map(page => new HtmlWebpackPlugin({
            template: `${PAGES_DIR}/${page}`,
            filename: `./${page.replace(/\.pug/,'.html')}`,
            chunks: ['app']
        })),
        new HtmlWebpackPlugin({
            template: `${PAGES_DIR}/colors/colors.pug`,
            filename: './colors/colors.html',
            chunks: ['colors', 'app'],
            inject: true
        })

        // For using standart html files
        // ...PAGES.map(page => new HtmlWebpackPlugin({
        //     template: `${PAGES_DIR}/${page}`,
        //     filename: `./${page}`
        // })
        //)
    ]
};
