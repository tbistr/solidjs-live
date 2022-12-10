import { HelloWorld } from "./HelloWorld";
import { BookList } from "./BookList";
import { AddBook } from "./AddBook";

interface BookshelfProps {
  name: string;
}

function Bookshelf(props: BookshelfProps) {
  return (
    <div>
      <h1>{props.name}'s Bookshelf</h1>
      <BookList />
      <AddBook />
    </div>
  );
}

function App() {
  return (
    <Bookshelf name="solid" />
  );
};

export default App;
