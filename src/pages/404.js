import React from 'react';

import { Layout, SideBar } from "../components";

const IndexPage = () => (
  <Layout>
    <SideBar />
    <div id="wrapper">
      <div id="main">
        <section>
          <div className="container">
            <section>
              <h1>NOT FOUND</h1>
              <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
            </section>
          </div>
        </section>
      </div>
    </div>
  </Layout>
);

export default IndexPage;
