import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutPage from "./components/views/AboutPage/AboutPage";
import HomePage from "./components/views/HomePage/HomePage";
import ContactPage from "./components/views/ContactPage/ContactPage";
import ProjectPage from "./components/views/ProjectPage";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route exact path='/' component={HomePage} />
				<Route exact path='/about' component={AboutPage} />
				<Route exact path='/contact' component={ContactPage} />
				<Route exact path='/project' component={ProjectPage} />
				<Route exact path='*' component={NoPage} />
			</Routes>
		</BrowserRouter>
	);
}
export default App;
