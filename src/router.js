import React from 'react';
import { Router, Route } from 'dva/router';

import IndexPage from './layouts/NewsPage/IndexPage'
import NewsDetail from './layouts/NewsPage/NewsDetail'

function RouterConfig({ history }) {
	// /detail/:id好像与之不匹配
  return (
    <Router history={history}>
      <Route path="/" component={IndexPage} />
      <Route path="/detail" component={NewsDetail} />
    </Router>
  );
}

export default RouterConfig;
