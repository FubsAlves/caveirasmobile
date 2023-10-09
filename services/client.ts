import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
    uri: 'https://sa-east-1.cdn.hygraph.com/content/cln6xaao9co9101uodg1b1uz4/master',
    cache: new InMemoryCache()
  });

export default client;