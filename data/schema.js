import {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
} from 'graphql';

const GREETINGS = {
  hello: 'Hello world! First example',
};


const HEADER = {
  headercontent: 'Header content',
};

/**
 * Objects.
 * Build up a portrait of your data universe
 * using the object type. Here, we define a
 * type of object that has a 'hello' field
 * that is of the string type.
 */
const GreetingsType = new GraphQLObjectType({
  name: 'GreetingsQL',
  fields: () => ({
    hello: {type: GraphQLString},
  }),
});

const HeaderType = new GraphQLObjectType({
  name: 'Header',
  fields: () => ({
    headercontent: {type: GraphQLString},
  }),
});
/**
 * The schema.
 * Here we export a schema that offers one root
 * field named 'greetings', and a method to
 * resolve its data.
 *
 * To learn more about writing GraphQL schemas for Relay, visit:
 *   https://github.com/graphql/graphql-relay-js
 */

//export default new GraphQLSchema({
export var Schema =  new GraphQLSchema({
//export var Schema = new GraphQLSchema({
  query: new GraphQLObjectType({
  //query: GreetingsType,
    name: 'Query',
    fields: () => ({
      greetingsSchema: {
        type: GreetingsType,
        // Here we define a resolver that returns
        // the data defined above. Were this schema
        // executing on the server side, you could
        // write a resolve method that fetches
        // live data from a database.
        resolve: () => GREETINGS,
      },
    }),
  }),
});

