import { ASTVisitor } from '../../language/visitor.d.ts';
import { SDLValidationContext } from '../ValidationContext.d.ts';

/**
 * Unique directive names
 *
 * A GraphQL document is only valid if all defined directives have unique names.
 */
export function UniqueDirectiveNamesRule(
  context: SDLValidationContext,
): ASTVisitor;
