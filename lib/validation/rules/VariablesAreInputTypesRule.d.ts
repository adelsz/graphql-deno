import { ASTVisitor } from '../../language/visitor.d.ts';
import { ValidationContext } from '../ValidationContext.d.ts';

/**
 * Variables are input types
 *
 * A GraphQL operation is only valid if all the variables it defines are of
 * input types (scalar, enum, or input object).
 */
export function VariablesAreInputTypesRule(
  context: ValidationContext,
): ASTVisitor;
