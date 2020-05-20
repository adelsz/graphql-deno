import { ASTVisitor } from '../../language/visitor.d.ts';
import { ASTValidationContext } from '../ValidationContext.d.ts';

/**
 * Unique argument names
 *
 * A GraphQL field or directive is only valid if all supplied arguments are
 * uniquely named.
 */
export function UniqueArgumentNamesRule(
  context: ASTValidationContext,
): ASTVisitor;
