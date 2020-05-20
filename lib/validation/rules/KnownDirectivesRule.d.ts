import { ASTVisitor } from '../../language/visitor.d.ts';
import { ValidationContext, SDLValidationContext } from '../ValidationContext.d.ts';

/**
 * Known directives
 *
 * A GraphQL document is only valid if all `@directives` are known by the
 * schema and legally positioned.
 */
export function KnownDirectivesRule(
  context: ValidationContext | SDLValidationContext,
): ASTVisitor;
