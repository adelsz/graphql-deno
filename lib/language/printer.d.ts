import { ASTNode } from './ast.d.ts';

/**
 * Converts an AST into a string, using one set of reasonable
 * formatting rules.
 */
export function print(ast: ASTNode): string;
