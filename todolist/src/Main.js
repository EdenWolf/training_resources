function Main(props) {
    const items = props.items;
    const removeItem = props.removeItem;
    const toggleCompleteItem = props.toggleCompleteItem;

    return (
        <section className="main">
            <input className="toggle-all"
                type="checkbox" />
            <ul className="todo-list">
                {items.map(item => (
                    <li className={item.completed ? "completed" : null}>
                        <div className="view">
                            <input className="toggle"
                                type="checkbox" />
                            <label onClick={() => toggleCompleteItem(item)}>{item.title}</label>
                            <button className="destroy" onClick={() => removeItem(item)} />
                        </div>
                        <input className="edit" />
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default Main;