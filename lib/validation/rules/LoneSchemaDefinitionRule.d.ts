import { ASTVisitor } from '../../language/visitor.d.ts';
import { SDLValidationContext } from '../ValidationContext.d.ts';

/**
 * Lone Schema definition
 *
 * A GraphQL document is only valid if it contains only one schema definition.
 */
export function LoneSchemaDefinitionRule(
  context: SDLValidationContext,
): ASTVisitor;
