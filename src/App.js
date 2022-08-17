import Header from './components/Header';
import TaskList from './components/TaskList';
import Calendar from './components/Calendar';

function App() {
  return (
    <>
      <Header />
      <main>
        <TaskList />
        <Calendar />
      </main>
    </>
  );
}

export default App;
