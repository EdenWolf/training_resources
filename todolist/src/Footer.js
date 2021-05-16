function Footer(props) {
    const items = props.items;
    const clearCompleted = props.clearCompleted;

    return (
        <footer className="footer">
            <span className="todo-count"><strong>{items.length}</strong> items left</span>
            <button className="clear-completed" onClick={clearCompleted}>Clear completed
        </button>
        </footer>
    )
}

export default Footer;