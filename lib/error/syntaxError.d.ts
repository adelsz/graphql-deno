import { Source } from '../language/source.d.ts';

import { GraphQLError } from './GraphQLError.d.ts';

/**
 * Produces a GraphQLError representing a syntax error, containing useful
 * descriptive information about the syntax error's position in the source.
 */
export function syntaxError(
  source: Source,
  position: number,
  description: string,
): GraphQLError;
