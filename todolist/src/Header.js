function Header(props) {
    const addItem = props.addItem;
    const title = props.title;
    const showCompleted = props.showCompleted;
    const showIncompleted = props.showIncompleted;
    const showAll = props.showAll;

    function handleEnter(event) {
        if (event.code === 'Enter') {
            addItem(event.target.value);
            event.target.value = '';
        }
    }

    return (
        <header className="header">
            <h1>{title}</h1>
            <ul className="show-buttons">
                <li>
                    <button onClick={showCompleted}>Show completed
                </button>
                </li>
                <li>
                    <button onClick={showIncompleted}>Show incompleted
                </button>
                </li>
                <li>
                    <button onClick={showAll}>Show all
                </button>
                </li>
            </ul>
            <input className="new-todo"
                placeholder="What needs to be done?"
                autoFocus onKeyDown={handleEnter} />
        </header>
    )
}

export default Header;