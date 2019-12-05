import React from 'react';
import { Switch, Route, BrowserRouter as Router, Redirect } from 'react-router-dom';
import Home from 'pages/Home';
import { Layout } from 'antd';
import AppHeader from 'components/AppHeader';
import App from 'pages/App';

const { Header, Content } = Layout;

export default function Routers() {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header>
        <AppHeader />
      </Header>
      <Content>
        <Router>
          <Switch>
            <Route exact path="/app" component={App} />
            <Route exact path="/" component={Home} />
            <Redirect to="/" />
          </Switch>
        </Router>
      </Content>
    </Layout>
  );
}
