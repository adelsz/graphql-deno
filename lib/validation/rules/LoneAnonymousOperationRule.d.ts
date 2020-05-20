import { ASTVisitor } from '../../language/visitor.d.ts';
import { ASTValidationContext } from '../ValidationContext.d.ts';

/**
 * Lone anonymous operation
 *
 * A GraphQL document is only valid if when it contains an anonymous operation
 * (the query short-hand) that it contains only that one operation definition.
 */
export function LoneAnonymousOperationRule(
  context: ASTValidationContext,
): ASTVisitor;
