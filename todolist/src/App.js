import './App.css';
import { useState } from 'react';
import Footer from './Footer';
import Header from './Header';
import Main from './Main';

const LOCAL_STORAGE_LIST_KEY = 'tasks.lists';

function App() {
  const [items, setItems] = useState(JSON.parse(localStorage.getItem(LOCAL_STORAGE_LIST_KEY)) || []);
  const [showStatus, setStatus] = useState({ completed: false, incompleted: false, all: true })

  function save() {
    localStorage.setItem(LOCAL_STORAGE_LIST_KEY, JSON.stringify(items));
  }

  function addNewItem(itemTitle) {
    setItems([...items, { title: itemTitle, completed: false, id: (new Date()).getTime() }]);
    save();
  }

  function removeItem(item) {
    const updateItems = items.filter(currentItem => item.title !== currentItem.title);
    setItems(updateItems);
    save();
  }

  function toggleCompleteItem(item) {
    const updateItems = items.map(currentItem => {
      if (currentItem.id === item.id)
        currentItem.completed = !currentItem.completed;
      return currentItem;
    });
    setItems(updateItems);
    save();
  }

  function clearCompleted() {
    const updateItems = items.filter(currentItem => !currentItem.completed);
    setItems(updateItems);
    save();
  }

  function showCompleted() {
    setStatus({ completed: true, incompleted: false, all: false });
  }

  function showIncompleted() {
    setStatus({ completed: false, incompleted: true, all: false });
  }

  function showAll() {
    setStatus({ completed: false, incompleted: false, all: true });
  }

  return (
    <section className="todoapp">
      <Header title="ToDo" addItem={addNewItem} showCompleted={showCompleted} showIncompleted={showIncompleted} showAll={showAll} />
      <Main items={items} removeItem={removeItem} toggleCompleteItem={toggleCompleteItem} showStatus={showStatus} />
      <Footer items={items} clearCompleted={clearCompleted} />
    </section>
  );
}

export default App;
