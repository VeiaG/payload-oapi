import type { OpenAPIV3, OpenAPIV3_1 } from 'openapi-types'

export const apiKeySecurity = { ApiKey: [] }

export const generateSecuritySchemes = (): Record<
  string,
  OpenAPIV3.SecuritySchemeObject & OpenAPIV3_1.SecuritySchemeObject
> => ({
  ApiKey: {
    type: 'apiKey',
    in: 'header',
    name: 'Authorization',
    description:
      'Format: `{collectionSlug} API-Key {your_api_key}`  \nExample: `users API-Key abc123`',
  },
})
