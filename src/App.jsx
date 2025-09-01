import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutPage from "./components/views/AboutPage/AboutPage.jsx";
import HomePage from "./components/views/HomePage/HomePage.jsx";
import ContactPage from "./components/views/ContactPage/ContactPage.jsx";
import ProjectPage from "./components/views/ProjectPage/ProjectPage.jsx";
import NoPage from "./components/views/NoPage/NoPage.jsx";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/about' element={<AboutPage />} />
				<Route path='/contact' element={<ContactPage />} />
				<Route path='/project' element={<ProjectPage />} />
				<Route path='*' element={<NoPage />} />
			</Routes>
		</BrowserRouter>
	);
}
export default App;
