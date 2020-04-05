export default {
  plugins: ["umi-plugin-dva"],
  proxy: {
    "/api/": {
      target: "https://dev.iecho.cc",
      changeOrigin: true,
    },
  },
};
