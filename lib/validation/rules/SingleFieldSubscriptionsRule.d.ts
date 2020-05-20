import { ASTVisitor } from '../../language/visitor.d.ts';
import { ASTValidationContext } from '../ValidationContext.d.ts';

/**
 * Subscriptions must only include one field.
 *
 * A GraphQL subscription is valid only if it contains a single root field.
 */
export function SingleFieldSubscriptionsRule(
  context: ASTValidationContext,
): ASTVisitor;
