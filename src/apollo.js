import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri: "http://ubuntu.kinqq.live:4000/",
    cache: new InMemoryCache(),
});

export default client;
