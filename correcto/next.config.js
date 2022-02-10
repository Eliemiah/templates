
module.exports = {
  reactStrictMode: true,
  images: {
    deviceSizes: [320, 480, 600, 768, 1024, 1200],
  },
  iframes:{
    path: "https://www.google.com/maps/*"
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
     {
       test: /\.(png|svg|jpg|jpeg|gif)$/i,
       type: 'asset/resource',
     },
    ],
  },
//  withCss: (withPurgeCss()),
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/': { page: '/' },
    }
  },
//withPurgeCss
  // webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
  //   if (!isServer) {
  //     config.plugins.push(
  //       new WorkerPlugin({
  //         // use "self" as the global object when receiving hot updates.
  //         globalObject: "self",
  //       })
  //     );
  //   }
  //   return config;
  // },
}

/*

  images: {
    path: '/'
  }
  */
  // ["480","600","800","1024","1200"]
/*
  withPurgeCss: () => { 
    withPurgeCss({ purgeCssEnabled: ({ dev, isServer }) => (!dev && !isServer) // Only enable PurgeCSS for client-side production builds
  })},
  */

  /*

    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    if(!isServer){ config.resolve.fallback = {
        WorkerPlugin: require.resolve('worker-plugin')
      }
     config.plugins.push(  new webpack.ProvidePlugin({
      WorkerPlugin: 'worker-plugin'
    }));}
    return config
  },
  */