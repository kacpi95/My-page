import Route from "react-router-dom";
import AboutPage from "./components/views/AboutPage/AboutPage";
import HomePage from "./components/views/HomePage/HomePage";

function App() {
	return (
		<>
			<Route exact path={"/"} component={HomePage} />
			<Route exact path={"/about"} component={AboutPage} />
		</>
	);
}
export default App;
