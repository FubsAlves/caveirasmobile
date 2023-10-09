import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
    uri: 'https://api-sa-east-1.hygraph.com/v2/cln6xaao9co9101uodg1b1uz4/master',
    cache: new InMemoryCache()
  });

export default client;