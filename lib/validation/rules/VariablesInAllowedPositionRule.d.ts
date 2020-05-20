import { ASTVisitor } from '../../language/visitor.d.ts';
import { ValidationContext } from '../ValidationContext.d.ts';

/**
 * Variables passed to field arguments conform to type
 */
export function VariablesInAllowedPositionRule(
  context: ValidationContext,
): ASTVisitor;
