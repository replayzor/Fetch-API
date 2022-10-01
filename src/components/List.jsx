import ItemList from "./ItemList";

const List = ({ items }) => {
	return (
		<ul>
			{items.map((item) => {
				return <ItemList key={item.id} item={item} />;
			})}
		</ul>
	);
};

export default List;
