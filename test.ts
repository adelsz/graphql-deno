import {
  graphql,
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
}  from "./mod.ts";

const query = '{ hello }';

const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
      hello: {
        type: GraphQLString,
        resolve() {
          return 'world';
        },
      },
    },
  }),
});

graphql(schema, query).then((result: any) => {
  // Prints
  // {
  //   data: { hello: "world" }
  // }
  console.log(result);
});

