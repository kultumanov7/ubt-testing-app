// vite.config.js
import { defineConfig } from "file:///Users/mac/Desktop/stp/prep-test-front/node_modules/vite/dist/node/index.js";
import react from "file:///Users/mac/Desktop/stp/prep-test-front/node_modules/@vitejs/plugin-react/dist/index.mjs";
import path from "path";
var __vite_injected_original_dirname = "/Users/mac/Desktop/stp/prep-test-front";
var vite_config_default = defineConfig({
  root: path.resolve(__vite_injected_original_dirname),
  plugins: [react()],
  resolve: {
    alias: {
      "@api": path.resolve(__vite_injected_original_dirname, "src/api"),
      "@assets": path.resolve(__vite_injected_original_dirname, "src/assets"),
      "@components": path.resolve(__vite_injected_original_dirname, "src/components"),
      "@containers": path.resolve(__vite_injected_original_dirname, "src/containers"),
      "@helpers": path.resolve(__vite_injected_original_dirname, "src/helpers"),
      "@pages": path.resolve(__vite_injected_original_dirname, "src/pages"),
      "@routes": path.resolve(__vite_injected_original_dirname, "src/routes"),
      "@store": path.resolve(__vite_injected_original_dirname, "src/store"),
      "@styles": path.resolve(__vite_injected_original_dirname, "src/styles"),
      "@utils": path.resolve(__vite_injected_original_dirname, "src/utils")
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvbWFjL0Rlc2t0b3Avc3RwL3ByZXAtdGVzdC1mcm9udFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL1VzZXJzL21hYy9EZXNrdG9wL3N0cC9wcmVwLXRlc3QtZnJvbnQvdml0ZS5jb25maWcuanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL1VzZXJzL21hYy9EZXNrdG9wL3N0cC9wcmVwLXRlc3QtZnJvbnQvdml0ZS5jb25maWcuanNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJ1xuaW1wb3J0IHJlYWN0IGZyb20gJ0B2aXRlanMvcGx1Z2luLXJlYWN0J1xuaW1wb3J0IHBhdGggZnJvbSAncGF0aCdcblxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIHJvb3Q6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUpLFxuICBwbHVnaW5zOiBbcmVhY3QoKV0sXG4gIHJlc29sdmU6IHtcbiAgICBhbGlhczoge1xuICAgICAgJ0BhcGknOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnc3JjL2FwaScpLFxuICAgICAgJ0Bhc3NldHMnOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnc3JjL2Fzc2V0cycpLFxuICAgICAgJ0Bjb21wb25lbnRzJzogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJ3NyYy9jb21wb25lbnRzJyksXG4gICAgICAnQGNvbnRhaW5lcnMnOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnc3JjL2NvbnRhaW5lcnMnKSxcbiAgICAgICdAaGVscGVycyc6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICdzcmMvaGVscGVycycpLFxuICAgICAgJ0BwYWdlcyc6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICdzcmMvcGFnZXMnKSxcbiAgICAgICdAcm91dGVzJzogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJ3NyYy9yb3V0ZXMnKSxcbiAgICAgICdAc3RvcmUnOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnc3JjL3N0b3JlJyksXG4gICAgICAnQHN0eWxlcyc6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICdzcmMvc3R5bGVzJyksXG4gICAgICAnQHV0aWxzJzogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJ3NyYy91dGlscycpLFxuICAgIH0sXG4gIH0sXG59KVxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFvUyxTQUFTLG9CQUFvQjtBQUNqVSxPQUFPLFdBQVc7QUFDbEIsT0FBTyxVQUFVO0FBRmpCLElBQU0sbUNBQW1DO0FBS3pDLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLE1BQU0sS0FBSyxRQUFRLGdDQUFTO0FBQUEsRUFDNUIsU0FBUyxDQUFDLE1BQU0sQ0FBQztBQUFBLEVBQ2pCLFNBQVM7QUFBQSxJQUNQLE9BQU87QUFBQSxNQUNMLFFBQVEsS0FBSyxRQUFRLGtDQUFXLFNBQVM7QUFBQSxNQUN6QyxXQUFXLEtBQUssUUFBUSxrQ0FBVyxZQUFZO0FBQUEsTUFDL0MsZUFBZSxLQUFLLFFBQVEsa0NBQVcsZ0JBQWdCO0FBQUEsTUFDdkQsZUFBZSxLQUFLLFFBQVEsa0NBQVcsZ0JBQWdCO0FBQUEsTUFDdkQsWUFBWSxLQUFLLFFBQVEsa0NBQVcsYUFBYTtBQUFBLE1BQ2pELFVBQVUsS0FBSyxRQUFRLGtDQUFXLFdBQVc7QUFBQSxNQUM3QyxXQUFXLEtBQUssUUFBUSxrQ0FBVyxZQUFZO0FBQUEsTUFDL0MsVUFBVSxLQUFLLFFBQVEsa0NBQVcsV0FBVztBQUFBLE1BQzdDLFdBQVcsS0FBSyxRQUFRLGtDQUFXLFlBQVk7QUFBQSxNQUMvQyxVQUFVLEtBQUssUUFBUSxrQ0FBVyxXQUFXO0FBQUEsSUFDL0M7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
