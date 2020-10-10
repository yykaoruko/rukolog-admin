import '../styles/globals.css'
import rootReducer from '~/src/store'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

function MyApp({ Component, pageProps }) {
  const store = createStore(rootReducer);
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
