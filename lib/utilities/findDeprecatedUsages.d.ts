import { GraphQLError } from '../error/GraphQLError.d.ts';
import { DocumentNode } from '../language/ast.d.ts';
import { GraphQLSchema } from '../type/schema.d.ts';

/**
 * A validation rule which reports deprecated usages.
 *
 * Returns a list of GraphQLError instances describing each deprecated use.
 */
export function findDeprecatedUsages(
  schema: GraphQLSchema,
  ast: DocumentNode,
): Array<GraphQLError>;
