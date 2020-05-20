## GraphQL-Deno

This is a one-to-one port of [graphql-js](https://github.com/graphql/graphql-js) to [Deno](https://deno.land/).  
It is working, fully adapted to Deno and exports both TS types and JS code.

Usage:
```ts
import {
  graphql,
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
}  from "https://raw.githubusercontent.com/adelsz/graphql-deno/master/mod.ts";
```

You can test it in this repository by running:
```
deno run ./test.ts
```

Releases and tags of this repository will mirror [graphql-js](https://github.com/graphql/graphql-js) releases.
