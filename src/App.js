import { useEffect, useState } from "react";
import Form from "./components/Form";
import List from "./components/List";

function App() {
	const [items, setItems] = useState([]);
	const [reqType, setReqType] = useState("posts");
	const API_URL = `https://jsonplaceholder.typicode.com/${reqType}`;

	useEffect(() => {
		const apiRequest = async () => {
			const resp = await fetch(API_URL);
			const data = await resp.json();
			setItems(data);
		};
		apiRequest();
	}, [API_URL, reqType]);

	return (
		<div className="App">
			<h2>Fetch data API request</h2>
			<Form reqType={reqType} setReqType={setReqType} />
			<List items={items} />
		</div>
	);
}

export default App;
