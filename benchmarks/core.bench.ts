import 'reflect-metadata';
import { bench, describe } from 'vitest';
import { Controller, Get, Injectable, Module } from '@nestjs/common';
import { NestFactory } from '../packages/core/nest-factory';
import { MetadataScanner } from '../packages/core/metadata-scanner';
import { ModuleTokenFactory } from '../packages/core/injector/module-token-factory';
import { RoutePathFactory } from '../packages/core/router/route-path-factory';
import { ApplicationConfig } from '../packages/core/application-config';

// --- Test fixtures ---

@Injectable()
class CatsService {
  findAll() {
    return [];
  }
  findOne(id: number) {
    return { id };
  }
  create(data: any) {
    return data;
  }
}

@Controller('cats')
class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Get()
  findAll() {
    return this.catsService.findAll();
  }

  @Get(':id')
  findOne() {
    return this.catsService.findOne(1);
  }
}

@Injectable()
class DogsService {
  findAll() {
    return [];
  }
}

@Controller('dogs')
class DogsController {
  constructor(private readonly dogsService: DogsService) {}

  @Get()
  findAll() {
    return this.dogsService.findAll();
  }
}

@Module({
  controllers: [CatsController],
  providers: [CatsService],
})
class CatsModule {}

@Module({
  controllers: [DogsController],
  providers: [DogsService],
})
class DogsModule {}

@Module({
  imports: [CatsModule, DogsModule],
})
class AppModule {}

// --- Benchmarks ---

describe('MetadataScanner', () => {
  const scanner = new MetadataScanner();

  bench('getAllMethodNames from controller prototype', () => {
    // Clear the cache to measure actual scanning performance
    (scanner as any).cachedScannedPrototypes = new Map();
    scanner.getAllMethodNames(CatsController.prototype);
  });

  bench('getAllMethodNames with cache hit', () => {
    scanner.getAllMethodNames(CatsController.prototype);
  });
});

describe('ModuleTokenFactory', () => {
  const factory = new ModuleTokenFactory();

  bench('create static module token', () => {
    // Reset the cache to measure actual token creation
    (factory as any).moduleIdsCache = new WeakMap();
    (factory as any).moduleTokenCache = new Map();
    factory.create(CatsModule);
  });

  bench('create dynamic module token', () => {
    (factory as any).moduleIdsCache = new WeakMap();
    (factory as any).moduleTokenCache = new Map();
    factory.create(CatsModule, {
      providers: [CatsService],
      controllers: [CatsController],
    });
  });

  bench('getModuleName', () => {
    factory.getModuleName(CatsModule);
  });
});

describe('RoutePathFactory', () => {
  const config = new ApplicationConfig();
  const factory = new RoutePathFactory(config);

  bench('create simple route path', () => {
    factory.create({
      ctrlPath: '/cats',
      methodPath: '/',
    });
  });

  bench('create route path with global prefix', () => {
    factory.create({
      ctrlPath: '/cats',
      methodPath: '/:id',
      globalPrefix: '/api',
    });
  });

  bench('create route path with module path', () => {
    factory.create({
      modulePath: '/v1',
      ctrlPath: '/cats',
      methodPath: '/:id',
      globalPrefix: '/api',
    });
  });
});

describe('NestFactory', () => {
  bench('create application context', async () => {
    const app = await NestFactory.createApplicationContext(AppModule, {
      logger: false,
    });
    await app.close();
  });
});
