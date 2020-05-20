import Maybe from '../tsutils/Maybe.d.ts';
import { GraphQLError } from '../error/GraphQLError.d.ts';
import { ASTVisitor } from '../language/visitor.d.ts';
import {
  DocumentNode,
  OperationDefinitionNode,
  VariableNode,
  SelectionSetNode,
  FragmentSpreadNode,
  FragmentDefinitionNode,
} from '../language/ast.d.ts';
import { GraphQLSchema } from '../type/schema.d.ts';
import { GraphQLDirective } from '../type/directives.d.ts';
import {
  GraphQLInputType,
  GraphQLOutputType,
  GraphQLCompositeType,
  GraphQLField,
  GraphQLArgument,
} from '../type/definition.d.ts';
import { TypeInfo } from '../utilities/TypeInfo.d.ts';

type NodeWithSelectionSet = OperationDefinitionNode | FragmentDefinitionNode;
type VariableUsage = {
  readonly node: VariableNode;
  readonly type: Maybe<GraphQLInputType>;
  readonly defaultValue: Maybe<any>;
};

/**
 * An instance of this class is passed as the "this" context to all validators,
 * allowing access to commonly useful contextual information from within a
 * validation rule.
 */
export class ASTValidationContext {
  constructor(ast: DocumentNode, onError: (err: GraphQLError) => void);

  reportError(error: GraphQLError): undefined;

  getDocument(): DocumentNode;

  getFragment(name: string): Maybe<FragmentDefinitionNode>;

  getFragmentSpreads(node: SelectionSetNode): ReadonlyArray<FragmentSpreadNode>;

  getRecursivelyReferencedFragments(
    operation: OperationDefinitionNode,
  ): ReadonlyArray<FragmentDefinitionNode>;
}

export class SDLValidationContext extends ASTValidationContext {
  constructor(
    ast: DocumentNode,
    schema: Maybe<GraphQLSchema>,
    onError: (err: GraphQLError) => void,
  );

  getSchema(): Maybe<GraphQLSchema>;
}

export type SDLValidationRule = (context: SDLValidationContext) => ASTVisitor;

export class ValidationContext extends ASTValidationContext {
  constructor(
    schema: GraphQLSchema,
    ast: DocumentNode,
    typeInfo: TypeInfo,
    onError: (err: GraphQLError) => void,
  );

  getSchema(): GraphQLSchema;

  getVariableUsages(node: NodeWithSelectionSet): ReadonlyArray<VariableUsage>;

  getRecursivelyReferencedFragments(
    operation: OperationDefinitionNode,
  ): ReadonlyArray<FragmentDefinitionNode>;

  getType(): Maybe<GraphQLOutputType>;

  getParentType(): Maybe<GraphQLCompositeType>;

  getInputType(): Maybe<GraphQLInputType>;

  getParentInputType(): Maybe<GraphQLInputType>;

  getFieldDef(): Maybe<GraphQLField<any, any>>;

  getDirective(): Maybe<GraphQLDirective>;

  getArgument(): Maybe<GraphQLArgument>;
}

export type ValidationRule = (context: ValidationContext) => ASTVisitor;
