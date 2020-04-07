export default {
  plugins: ["umi-plugin-dva"],
  proxy: {
    "/api": {
      target: "https://dev.iecho.cc",
      pathRewrite: { "^/api": "" },
      changeOrigin: true,
      headers: {
        Host: "dev.iecho.cc",
        Origin: "https://dev.iecho.cc",
        Referer: "https://dev.iecho.cc/",
        "Content-Type": "application/json",
      },
      // headers: new Headers({
      //   "Content-Type": "application/json;charset=utf-8",
      // }),
    },
  },
};
