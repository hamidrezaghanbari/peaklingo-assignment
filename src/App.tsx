import { memo } from "react";
import { Header, Body } from "./components";
import { ThemeProvider, CounterProvider } from "./context";
import GlobalStyles from "./globalStyles";

function App() {
  return (
    <>
      <CounterProvider>
        <>
          <ThemeProvider>
            <>
              <GlobalStyles />
              <Header />
              <Body />
            </>
          </ThemeProvider>
        </>
      </CounterProvider>
    </>
  );
}

export default memo(App);
