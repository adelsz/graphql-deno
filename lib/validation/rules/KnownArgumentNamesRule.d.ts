import { ValidationContext, SDLValidationContext } from '../ValidationContext.d.ts';
import { ASTVisitor } from '../../language/visitor.d.ts';

/**
 * Known argument names
 *
 * A GraphQL field is only valid if all supplied arguments are defined by
 * that field.
 */
export function KnownArgumentNamesRule(context: ValidationContext): ASTVisitor;

/**
 * @internal
 */
export function KnownArgumentNamesOnDirectivesRule(
  context: ValidationContext | SDLValidationContext,
): ASTVisitor;
