// Any copyright is dedicated to the Public Domain.
// http://creativecommons.org/publicdomain/zero/1.0/

import webpack from 'webpack';
import contentServiceConfig from './webpack.config.content-service.default';

export default {
  ...contentServiceConfig,
  devtool: 'source-map',
  plugins: [
    ...contentServiceConfig.plugins,
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
  ],
};
