// Query를 Resolve 하는 곳

import { getMovies } from './db';

const resolvers = {
    Query: {
        movies: (_, { limit }) => getMovies(limit),
        // movie: (_, { id }) => getById(id)
    },

    // Mutation: {
    //     addMovie: (_, { name, score }) => addMovie(name, score),
    //     deleteMovie: (_, { id }) => deleteMovie(id) 
    // }
}

export default resolvers;



/* GraphQL Resolvers는 GraphQL 서버에서 요청을 받음. GraphQL 서버가 Query나 Mutation의 정의를
발견하면 Resolver를 찾을 것이고 해당 함수를 실행한다. */

/* Mutation은 DB 상태가 변할 때 사용한다 */