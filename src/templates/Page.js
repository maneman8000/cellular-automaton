import React from 'react';
import { css } from "@emotion/core";
import Layout from '../components/Layout';
import Canvas from '../components/Canvas';

class Page extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const n = this.props.location.pathname.match(/(\d+)/)[0];
    return (
      <Layout>
        <h1>{n}</h1>
        <Canvas number={n} />
      </Layout>
    );
  }
}

export default Page;
