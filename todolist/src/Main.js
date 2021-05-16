function Main(props) {
    const items = props.items;
    const removeItem = props.removeItem;
    const toggleCompleteItem = props.toggleCompleteItem;
    const showStatus = props.showStatus;

    function renderCompleted() {
        return (
            <ul className="todo-list">
                {items.filter(item => item.completed).map(item => (
                    <li className={item.completed ? "completed" : null} key={item.id}>
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
        )
    }

    function renderIncompleted() {
        return (
            <ul className="todo-list">
                {items.filter(item => !item.completed).map(item => ( // TODO: FIX!!! 
                    <li className={item.completed ? "completed" : null} key={item.id}>
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
        )
    }

    function renderAll() {
        return (
            <ul className="todo-list">
                {items.map(item => (
                    <li className={item.completed ? "completed" : null} key={item.id}>
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
        )
    }

    return (
        <section className="main">
            <input className="toggle-all"
                type="checkbox" />
            {showStatus.all ? renderAll() : showStatus.completed ? renderCompleted() : renderIncompleted()}
        </section>
    )
}

export default Main;