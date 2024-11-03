import "./App.css";
import CustomButton from "./components/button";

function App() {
  return (
    <div className="p-5 text-center">
      <CustomButton
        backgroundColor={"red"}
        buttonText={"hello"}
        linkRedirection={"hello"}
      />
    </div>
  );
}

export default App;
