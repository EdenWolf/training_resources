function Header(props) {
    const addItem = props.addItem;
    const title = props.title;

    function handleEnter(event) {
        if (event.code === 'Enter') {
            addItem(event.target.value);
            event.target.value = '';
        }
    }

    return (
        <header className="header">
            <h1>{title}</h1>
            <input className="new-todo"
                placeholder="What needs to be done?"
                autofocus onKeyDown={handleEnter} />
        </header>
    )
}

export default Header;