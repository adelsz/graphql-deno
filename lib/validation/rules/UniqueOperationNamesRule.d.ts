import { ASTVisitor } from '../../language/visitor.d.ts';
import { ASTValidationContext } from '../ValidationContext.d.ts';

/**
 * Unique operation names
 *
 * A GraphQL document is only valid if all defined operations have unique names.
 */
export function UniqueOperationNamesRule(
  context: ASTValidationContext,
): ASTVisitor;
