module.exports = {
    app: {
        name: 'ou-social-hub-backend',
        script: 'src/server.ts', // Entry point file
        exec_mode: 'cluster', // Enables cluster mode for load balancing
        instances: 'max', // Number of instances to run, use 'max' to use all CPU cores
        interpreter: 'ts-node', // Use ts-node to run TypeScript files
        interpreter_args: '--transpile-only', // ts-node arguments
        watch: ['src'], // Watch the 'src' directory
        ignore_watch: ['node_modules', 'dist'], // Folders to ignore
        watch_options: {
            "followSymlinks": false,
            "usePolling": true, // Use polling to watch files, useful for some environments
        },
        env: {
            NODE_ENV: "development",
        },
        env_production: {
            NODE_ENV: 'production',
        },
    }
}