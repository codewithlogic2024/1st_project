import { SnackbarProvider } from "notistack";
import "./App.css";
import { QueryClient, QueryClientProvider } from "react-query";

function App({ children }) {
  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <SnackbarProvider
          maxSnack={3}
          autoHideDuration={2000}
          anchorOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
          preventDuplicate
        >
          <div className="App">{children}</div>
        </SnackbarProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
