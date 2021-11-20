import React , {Suspense}from 'react';
import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import PublicRouter from './routers/PublicRouter';

function App() {
  return (
    <div>
       <Suspense
        fallback={
          <div
            className="h-full flex justify-center items-center"
            style={{ height: "100vh" }}
          >
            <p>Welcome</p>
          </div>
        }
      >
        <Router >
          <PublicRouter />
        </Router>
      </Suspense>
    </div>
  );
}

export default App;
