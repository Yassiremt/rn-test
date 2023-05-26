import Navigation from "./src/navigations/Navigation";
import { NativeBaseProvider } from "native-base";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reducers from "./src/reducers";
import ReduxThunk from "redux-thunk";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function App() {
  const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <NativeBaseProvider>
          <Navigation />
        </NativeBaseProvider>
      </QueryClientProvider>
    </Provider>
  );
}
