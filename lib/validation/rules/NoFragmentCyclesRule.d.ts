import { ASTVisitor } from '../../language/visitor.d.ts';
import { ValidationContext } from '../ValidationContext.d.ts';

export function NoFragmentCyclesRule(context: ValidationContext): ASTVisitor;
