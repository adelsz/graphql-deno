import { ASTVisitor } from '../../language/visitor.d.ts';
import { SDLValidationContext } from '../ValidationContext.d.ts';

/**
 * Unique enum value names
 *
 * A GraphQL enum type is only valid if all its values are uniquely named.
 */
export function UniqueEnumValueNamesRule(
  context: SDLValidationContext,
): ASTVisitor;
