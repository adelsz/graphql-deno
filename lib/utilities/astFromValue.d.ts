import Maybe from '../tsutils/Maybe.d.ts';
import { ValueNode } from '../language/ast.d.ts';
import { GraphQLInputType } from '../type/definition.d.ts';

/**
 * Produces a GraphQL Value AST given a JavaScript value.
 *
 * A GraphQL type must be provided, which will be used to interpret different
 * JavaScript values.
 *
 * | JSON Value    | GraphQL Value        |
 * | ------------- | -------------------- |
 * | Object        | Input Object         |
 * | Array         | List                 |
 * | Boolean       | Boolean              |
 * | String        | String / Enum Value  |
 * | Number        | Int / Float          |
 * | Mixed         | Enum Value           |
 * | null          | NullValue            |
 *
 */
export function astFromValue(
  value: any,
  type: GraphQLInputType,
): Maybe<ValueNode>;
