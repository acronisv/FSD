const path = require('path');
const fs = require('fs');
const webpack = require('webpack');
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
        colors: `${PATHS.src}/pug/pages/colors/colors.js`,
        elements: `${PATHS.src}/pug/pages/elements/elements.js`,
        cards: `${PATHS.src}/pug/pages/cards/cards.js`,
        headers_footers: `${PATHS.src}/pug/pages/headers-footers/headers-footers.js`,
        landing: `${PATHS.src}/pug/pages/landing/landing.js`,
        search: `${PATHS.src}/pug/pages/search/search.js`,
        room_details: `${PATHS.src}/pug/pages/room-details/room-details.js`,
        registry: `${PATHS.src}/pug/pages/registry/registry.js`,
        sign_in: `${PATHS.src}/pug/pages/sign-in/sign-in.js`
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
            },
            {
                from: `${PATHS.src}/static/favicons`,
                to: 'favicons'
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
        }),
        new HtmlWebpackPlugin({
            template: `${PAGES_DIR}/elements/elements.pug`,
            filename: './elements/elements.html',
            chunks: ['elements', 'app'],
            inject: true
        }),
        new HtmlWebpackPlugin({
            template: `${PAGES_DIR}/cards/cards.pug`,
            filename: './cards/cards.html',
            chunks: ['cards', 'app'],
            inject: true
        }),
        new HtmlWebpackPlugin({
            template: `${PAGES_DIR}/headers-footers/headers-footers.pug`,
            filename: './headers-footers/headers-footers.html',
            chunks: ['headers_footers', 'app'],
            inject: true
        }),
        new HtmlWebpackPlugin({
            template: `${PAGES_DIR}/landing/landing.pug`,
            filename: './landing/landing.html',
            chunks: ['landing', 'app'],
            inject: true
        }),
        new HtmlWebpackPlugin({
            template: `${PAGES_DIR}/search/search.pug`,
            filename: './search/search.html',
            chunks: ['search', 'app'],
            inject: true
        }),
        new HtmlWebpackPlugin({
            template: `${PAGES_DIR}/room-details/room-details.pug`,
            filename: './room-details/room-details.html',
            chunks: ['room_details', 'app'],
            inject: true
        }),
        new HtmlWebpackPlugin({
            template: `${PAGES_DIR}/registry/registry.pug`,
            filename: './registry/registry.html',
            chunks: ['registry', 'app'],
            inject: true
        }),
        new HtmlWebpackPlugin({
            template: `${PAGES_DIR}/sign-in/sign-in.pug`,
            filename: './sign-in/sign-in.html',
            chunks: ['sign_in', 'app'],
            inject: true
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        })

        // For using standart html files
        // ...PAGES.map(page => new HtmlWebpackPlugin({
        //     template: `${PAGES_DIR}/${page}`,
        //     filename: `./${page}`
        // })
        //)
    ]
};
