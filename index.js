import { GraphQLServer } from 'graphql-yoga'
import resolvers from './graphql/resolvers'

const server = new GraphQLServer({
    typeDefs: "graphql/schema.graphql",
    resolvers
}); //schema: 무엇을 받을지, 무엇을 줄지에 대해서 나의 설명같은거

server.start(()=>console.log("Graphql Server Running"));