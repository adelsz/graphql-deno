import { ASTVisitor } from '../../language/visitor.d.ts';
import { ASTValidationContext } from '../ValidationContext.d.ts';

/**
 * Unique input field names
 *
 * A GraphQL input object value is only valid if all supplied fields are
 * uniquely named.
 */
export function UniqueInputFieldNamesRule(
  context: ASTValidationContext,
): ASTVisitor;
