import * as React from "react";
import styled from "styled-components";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import DetailedBioPage from "./pages/DetailedBioPage";
import BlogPage from "./pages/BlogPage";
import PhotographyPage from "./pages/PhotographyPage";

// Use this to declare global styles for this
const AppContainer = styled.div`
  font-family: BitterRegular;
  font-size: 20px;
  background: #f5f5f5;
`;

const AppLandingPage: React.SFC<any> = (props: any) => {
  return (
    <AppContainer>
      <Header showHome={false}></Header>
      <HomePage></HomePage>
      <DetailedBioPage></DetailedBioPage>
      <Footer></Footer>
    </AppContainer>
  );
};

class App extends React.Component<{}, {}> {
  render(): JSX.Element {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={AppLandingPage} />
          <Route path="/blog" component={BlogPage} />
          <Route path="/photography" component={PhotographyPage} />
        </Switch>
      </Router>
    );
  }
}

export default App;
