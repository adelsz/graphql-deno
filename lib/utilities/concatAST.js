import flatMap from '../polyfills/flatMap.js';

/**
 * Provided a collection of ASTs, presumably each from different files,
 * concatenate the ASTs together into batched AST, useful for validating many
 * GraphQL source files which together represent one conceptual application.
 */
export function concatAST(asts) {
  return {
    kind: 'Document',
    definitions: flatMap(asts, ast => ast.definitions)
  };
}