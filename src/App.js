import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './style.css';

const SearchTableSidebar = () => {
  return (
    <aside class="search-table__sidebar">
      <form>
        <input type="input" placeholder="Filter Field"></input>
        <input type="button" value="submit"></input>
      </form>
    </aside>
  );
};

const SearchTableMain = ({ filterValue }) => {
  return (
    <main class="search-table__main">
      <div>gola</div>
    </main>
  );
};

class SearchTable extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section class="search-table">
        <SearchTableSidebar></SearchTableSidebar>
        <SearchTableMain></SearchTableMain>
      </section>
    );
  }
}

export default function App() {
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <Router>
        <div>
          <Switch>
            <Route exact path="/searchTable">
              <SearchTable></SearchTable>
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}
