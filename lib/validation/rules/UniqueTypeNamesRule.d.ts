import { ASTVisitor } from '../../language/visitor.d.ts';
import { SDLValidationContext } from '../ValidationContext.d.ts';

/**
 * Unique type names
 *
 * A GraphQL document is only valid if all defined types have unique names.
 */
export function UniqueTypeNamesRule(context: SDLValidationContext): ASTVisitor;
