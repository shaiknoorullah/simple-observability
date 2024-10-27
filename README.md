# TypeScript Observability System

A comprehensive observability solution for TypeScript applications, providing integrated tracing, metrics, and logging capabilities.

## Features

- **Complete Observability**: Integrated tracing, metrics, and logging.
- **Live Visualization**: Real-time visualization of telemetry data.
- **OpenTelemetry Compatible**: Built on the OpenTelemetry standard.
- **Flexible Configuration**: Extensive configuration options for different environments.
- **Production-Ready**: Includes sampling, batching, and proper shutdown handling.
- **Type-Safe**: Full TypeScript support with comprehensive type definitions.

## 🚀 Installation

\`\`\`sh
npm install ts-observability
\`\`\`

## 📘 Quick Start

\`\`\`typescript
import { ObservabilitySystem, ObservabilityConfig } from 'ts-observability';

const config: ObservabilityConfig = {
serviceName: 'my-service',
serviceVersion: '1.0.0',
environment: 'production'
};

const observability = new ObservabilitySystem(config);

// Get telemetry instances
const tracer = observability.getTracer();
const meter = observability.getMeter();
const logger = observability.getLogger();

// Start live visualization
observability.startTraceVisualization();

// Use in your application
const span = tracer.startSpan('operation');
try {
meter.createCounter('requests').add(1);
logger.info('Operation started');
// Your business logic here
span.end();
} catch (error) {
logger.error('Operation failed', { error });
span.recordException(error);
span.end();
}

// Cleanup
await observability.shutdown();
\`\`\`

## 🏗️ Architecture

### Design Principles

1. **SOLID Principles**

   - Single Responsibility: Each class has a focused purpose.
   - Open/Closed: Extensible through abstractions.
   - Interface Segregation: Clean, focused interfaces.
   - Dependency Inversion: Configuration injection.

2. **Clean Architecture**
   - Core domain is independent of frameworks.
   - Dependency flow points inward.
   - Clear separation of concerns.

## 🤝 Contributing

To contribute, please fork the repository, create a new feature branch, and submit a pull request.

## 📄 License

MIT License - see LICENSE file for details.
