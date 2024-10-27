import { defineConfig } from 'tsup';

export default defineConfig({
    entry: ['src/index.ts'],
    format: ['cjs', 'esm'],
    dts: true,
    splitting: false,
    sourcemap: true,
    clean: true,
    minify: true,
    treeshake: true,
    external: [
        '@opentelemetry/api',
        '@opentelemetry/exporter-metrics-otlp-http',
        '@opentelemetry/exporter-trace-otlp-http',
        '@opentelemetry/resources',
        '@opentelemetry/sdk-logs',
        '@opentelemetry/sdk-metrics',
        '@opentelemetry/sdk-trace-node',
        '@opentelemetry/semantic-conventions',
    ],
});
