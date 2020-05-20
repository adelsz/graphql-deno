import { ASTVisitor } from '../../language/visitor.d.ts';
import { SDLValidationContext } from '../ValidationContext.d.ts';

/**
 * Unique field definition names
 *
 * A GraphQL complex type is only valid if all its fields are uniquely named.
 */
export function UniqueFieldDefinitionNamesRule(
  context: SDLValidationContext,
): ASTVisitor;
