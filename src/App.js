import React from "react";
// components
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
// redux stuff
import { ReduxProvider } from "./redux/storeReducer";
function App() {
	// cart setup

	return (
		<ReduxProvider>
			<Navbar />
			<CartContainer />
		</ReduxProvider>
	);
}

export default App;
