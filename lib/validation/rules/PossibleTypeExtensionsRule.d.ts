import { ASTVisitor } from '../../language/visitor.d.ts';
import { SDLValidationContext } from '../ValidationContext.d.ts';

/**
 * Possible type extension
 *
 * A type extension is only valid if the type is defined and has the same kind.
 */
export function PossibleTypeExtensionsRule(
  context: SDLValidationContext,
): ASTVisitor;
