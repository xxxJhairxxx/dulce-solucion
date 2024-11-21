module.exports = {
  apps: [
    {
      name: '3085-dulce-solucion-next',
      script: 'node_modules/next/dist/bin/next',
      args: 'start -p 3085', //running on port 3052
      cwd: './app',
      exec_mode: 'fork',
      watch: false
    }
  ]
}
