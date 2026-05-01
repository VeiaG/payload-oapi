export type OpenAPIVersion = '3.0' | '3.1'

export interface OpenAPIMetadata {
  title: string
  version: string
  description?: string
}

export interface FilterOptions {
  includeCollections?: string[]
  excludeCollections?: string[]
  hideInternalCollections?: boolean
  includeGlobals?: string[]
  excludeGlobals?: string[]
}

export interface PluginOptions {
  enabled?: boolean
  openapiVersion?: OpenAPIVersion
  specEndpoint?: string
  authEndpoint?: string | false
  metadata: OpenAPIMetadata
  filters?: FilterOptions
  readOnly?: boolean
}

export type SanitizedPluginOptions = Required<Omit<PluginOptions, 'enabled' | 'specEndpoint' | 'authEndpoint'>>
