import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4umt6iy10t201uneihqebrz/master',
    cache: new InMemoryCache()
})