/** @type {import('@remix-run/dev').AppConfig} */
export default {
  ignoredRouteFiles: ["**/.*"],
  browserNodeBuiltinsPolyfill: {
    modules: {
      url: true,
      path: true,
      fs: true, // サーバーサイドでのfs使用を許可
    },
  },
  future: {
    v3_fetcherPersist: true,
    v3_lazyRouteDiscovery: true,
    v3_relativeSplatPath: true,
    v3_singleFetch: true,
    v3_throwAbortReason: true,
  },
  // Prismaとの互換性のためにサーバーサイドのモジュールを許可
  serverNodeBuiltinsPolyfill: {
    modules: {
      fs: true,
      path: true,
      url: true,
    },
  },
};
