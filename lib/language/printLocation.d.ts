import { Location } from './ast.d.ts';
import { Source } from './source.d.ts';
import { SourceLocation } from './location.d.ts';

/**
 * Render a helpful description of the location in the GraphQL Source document.
 */
export function printLocation(location: Location): string;

/**
 * Render a helpful description of the location in the GraphQL Source document.
 */
export function printSourceLocation(
  source: Source,
  sourceLocation: SourceLocation,
): string;
