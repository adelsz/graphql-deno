import { ASTVisitor } from '../../language/visitor.d.ts';
import { SDLValidationContext } from '../ValidationContext.d.ts';

/**
 * Unique operation types
 *
 * A GraphQL document is only valid if it has only one type per operation.
 */
export function UniqueOperationTypesRule(
  context: SDLValidationContext,
): ASTVisitor;
