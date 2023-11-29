import type { LocalImageService } from 'astro';
import { baseService } from 'astro/assets';

// Waiting for https://github.com/oven-sh/bun/issues/4549 to replace with sharp
const service: LocalImageService = {
  ...baseService,

  async transform(inputBuffer, transform, serviceConfig) {
    // Purposefully obfuscate the import to prevent bundling => will only work at build time!
    const imageService = (
      await new Function(`return import('astro/assets/services/squoosh')`)()
    ).default;

    return await imageService.transform(inputBuffer, transform, serviceConfig);
  },
};

export default service;
