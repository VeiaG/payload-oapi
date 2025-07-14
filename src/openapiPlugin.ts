import type { Plugin } from 'payload'
import type { PluginOptions } from './types.js'

import { createOAuthPasswordFlowHandler, createOpenAPIRequestHandler } from './requestHandlers.js'

/**
 * Plugin to generate OpenAPI spec
 *
 * @param options - plugin options
 * @param options.custom - custom OpenAPI paths to be added to the spec
 * @returns Payload plugin
 */
const openapi =
  ({
    specEndpoint = '/openapi.json',
    authEndpoint = '/openapi-auth',
    openapiVersion = '3.0',
    metadata,
    enabled = true,
    custom,
  }: PluginOptions): Plugin =>
  ({ endpoints = [], ...config }) => {
    if (!enabled) {
      return { ...config, endpoints }
    }

    return {
      ...config,
      endpoints: [
        ...endpoints,
        {
          method: 'get',
          path: specEndpoint,
          handler: createOpenAPIRequestHandler({
            openapiVersion,
            metadata,
            authEndpoint,
            custom,
          }),
        },
        {
          method: 'post',
          path: authEndpoint,
          handler: createOAuthPasswordFlowHandler(),
        },
      ],
    }
  }

export default openapi
