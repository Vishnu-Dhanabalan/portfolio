import * as React from "react";
import styled from "styled-components";

import Header from "../components/Header";

const Container = styled.div`
  font-family: BitterRegular;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #f5f5f5;
  font-size: 20px;
  min-height: 100vh;
`;

const PageUnderConstruction = styled.div`
  margin: 0 auto;
  font-size: 25px;
`;

const BlogPage: React.SFC<any> = (props: any) => {
  return (
    <Container>
      <Header showHome={true} />
      <PageUnderConstruction>
        Oops, this page is still under construction. Please comeback later. 🙏
      </PageUnderConstruction>
    </Container>
  );
};

export default BlogPage;
