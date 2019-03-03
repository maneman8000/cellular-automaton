import React from "react"
import { css } from "@emotion/core";
import {Cell, Grid, Row} from '@material/react-layout-grid';
import Card, {
  CardPrimaryContent
} from "@material/react-card";
import Layout from '../components/Layout';
import Canvas from '../components/Canvas';

export default () => {
  let i = 0;
  const CellCanvas = (
    (props) => (
      <Cell columns={3}>
        <Card css={css`
          padding: 8px;
        `}>
          <CardPrimaryContent>
            <h2>{props.i}</h2>
            <Canvas className="mdc-card__media-content" number={props.i} canvasWidth={100} canvasHeight={50} />
          </CardPrimaryContent>
        </Card>
      </Cell>
    )
  )
  const rows = [];  
  while (i < 256) {
    rows.push(
      <Row css={css`
        margin-bottom: 8px;
      `}>
        <CellCanvas i={i++} />
        <CellCanvas i={i++} />
        <CellCanvas i={i++} />
        <CellCanvas i={i++} />
      </Row>
    )
  }
  return (
    <Layout>
      <Grid>
        {rows.map(row => row)}
      </Grid>
    </Layout>
  );
}