import ThemeBtn from "./components/ThemeBtn/ThemeBtn";
import Card from "./components/Card/Card";
import ThemeContextProvider from "./context/ThemeContextProvider";


function App() {


  return (
    <>
      <ThemeContextProvider>
        <div className="flex flex-wrap min-h-screen items-center ">
          <div className="w-full ">
            <div className="w-full max-w-sm mx-auto flex justify-center mb-4">
              <ThemeBtn />
            </div>

            <div className="w-full max-w-sm mx-auto">
              <Card />
            </div>
          </div>
        </div>
      </ThemeContextProvider>
    </>
  );
}

export default App;
