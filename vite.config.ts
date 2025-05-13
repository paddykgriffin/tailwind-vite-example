import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig, loadEnv } from 'vite';
import svgr from 'vite-plugin-svgr';
import getPort from 'get-port';

export default defineConfig(async ({ mode }) => {
  const env = Object.assign(process.env, loadEnv(mode, process.cwd(), ""));
  const processEnvValues = {
    "process.env": Object.entries(env).reduce((prev, [key,value]) => {
      return Object.assign(prev, {
        [key]: value,
      });
    }, {}),
  };

const port = await getPort({ port: 3000 });


  return {
    plugins: [
      react(),
      svgr({
        include: "**/*.svg?react",
      }),
    ],
    define: processEnvValues,
    server: {
      open: true,
      host: 'localhost',
      port,
     
    },
    envPrefix: "REACT_APP_",
    base: '/',
    build: {
      outDir: 'build',
      rollupOptions: {
        output: {
          manualChunks: (id: string | string[]) => {
            if (id.includes('node_modules')) {
              return id.toString().split('node_modules/')[1].split('/')[0].toString();
            }
          },
        },
      },
    },
    resolve: {
      alias: { 
        '@': path.resolve(__dirname, './src') }
    },
  };
});
