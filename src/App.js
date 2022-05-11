import React, { Suspense, lazy } from 'react';
import { HashRouter as Router, Route, Link, NavLink, Redirect } from "react-router-dom";

let Page1 = lazy(() => import('./components/test/page1'))
let Page2 = lazy(() => import('./components/test/page2'))

//App.js ����ֻ����·�ɣ��������ڴ˴�д
function App() {
    return (
        <Suspense fallback="">
            <Router>
                {/*<Route path="/" exact component={Page1}></Route>*/}{/*������ҳ*/}
                <Route path="/page1" component={Page1}></Route>
                <Route path="/page2" component={Page2}></Route>
            </Router>
        </Suspense>
    );
}

export default App;
