import type { OpenAPIV3_1 } from 'openapi-types'

export type OpenAPIVersion = '3.0' | '3.1'

export interface OpenAPIMetadata {
  title: string
  version: string
  description?: string
}

export interface PluginOptions {
  enabled?: boolean
  openapiVersion?: OpenAPIVersion
  specEndpoint?: string
  authEndpoint?: string
  metadata: OpenAPIMetadata
  /**
   * Custom OpenAPI paths to be added to the spec
   */
  custom?: OpenAPIV3_1.PathsObject
}

export type SanitizedPluginOptions = Required<
  Omit<PluginOptions, 'enabled' | 'specEndpoint' | 'custom'>
> &
  Pick<PluginOptions, 'custom'>
