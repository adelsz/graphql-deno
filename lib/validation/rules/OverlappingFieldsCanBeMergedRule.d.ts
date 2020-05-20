import { ASTVisitor } from '../../language/visitor.d.ts';
import { ValidationContext } from '../ValidationContext.d.ts';

/**
 * Overlapping fields can be merged
 *
 * A selection set is only valid if all fields (including spreading any
 * fragments) either correspond to distinct response names or can be merged
 * without ambiguity.
 */
export function OverlappingFieldsCanBeMergedRule(
  context: ValidationContext,
): ASTVisitor;
