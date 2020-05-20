import {
  OperationDefinitionNode,
  OperationTypeDefinitionNode,
} from '../language/ast.d.ts';
import { GraphQLSchema } from '../type/schema.d.ts';
import { GraphQLObjectType } from '../type/definition.d.ts';

/**
 * Extracts the root type of the operation from the schema.
 */
export function getOperationRootType(
  schema: GraphQLSchema,
  operation: OperationDefinitionNode | OperationTypeDefinitionNode,
): GraphQLObjectType;
