import { ASTVisitor } from '../../language/visitor.d.ts';
import { ValidationContext } from '../ValidationContext.d.ts';

/**
 * Fragments on composite type
 *
 * Fragments use a type condition to determine if they apply, since fragments
 * can only be spread into a composite type (object, interface, or union), the
 * type condition must also be a composite type.
 */
export function FragmentsOnCompositeTypesRule(
  context: ValidationContext,
): ASTVisitor;
