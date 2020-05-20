import { ASTVisitor } from '../../language/visitor.d.ts';
import { ValidationContext } from '../ValidationContext.d.ts';

/**
 * No undefined variables
 *
 * A GraphQL operation is only valid if all variables encountered, both directly
 * and via fragment spreads, are defined by that operation.
 */
export function NoUndefinedVariablesRule(
  context: ValidationContext,
): ASTVisitor;
