import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ApolloClient, ApolloProvider, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { BrowserRouter } from "react-router-dom";


const GQL_URL =
  process.env.GQL_URL || "http://localhost:5000/graphql"

const httpLink = createHttpLink({
  uri: GQL_URL,
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
});


ReactDOM.render(
  <ApolloProvider client={client}>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </ApolloProvider>,
  document.getElementById('root')
);

