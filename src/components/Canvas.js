import React from 'react';
import PropTypes from 'prop-types';
import { css } from "@emotion/core";

const propTypes = {
  number: PropTypes.number.isRequired,
  canvasWidth: PropTypes.number,
  canvasHeight: PropTypes.number,
};

class Canvas extends React.Component {
  constructor(props) {
    super(props);
    this.number = props.number;
    this.canvasRef = React.createRef();
  }
  componentDidMount() {
    const canvas = this.canvasRef.current;
    canvas.width = this.canvasWidth();
    canvas.height = this.canvasHeight();
    this.draw(canvas.getContext('2d'));
  }
  canvasWidth() {
    return this.props.canvasWidth || ((typeof window !== "undefined") ? window.innerWidth : 0);
  }
  canvasHeight() {
    const max = Math.floor(this.canvasWidth() / 2);
    const h = this.props.canvasHeight || ((typeof window !== "undefined") ? window.innerHeight : 0);
    return h > max ? max : h;
  }
  draw(c) {
    const max = Math.floor(this.canvasWidth() / 2);
    const data = [];
    const number = this.props.number;
    for (let i = 0; i < max; i++) {
      const row = new Array(max * 2);
      if (i === 0) {
        row[max] = 1;
      }
      else {
        const prevRow = data[data.length - 1];
        for (let j = 0; j < max * 2; j++) {
          const v1 = j > 0 ? prevRow[j-1] : prevRow[max * 2 - 1];
          const v2 = prevRow[j];
          const v3 = j < max * 2 - 1 ? prevRow[j+1] : prevRow[0];
          if (v1 === 1 && v2 === 1 && v3 === 1) {
            row[j] = (number & 128) > 0 ? 1 : 0;
          }
          else if (v1 === 1 && v2 === 1 && v3 !== 1) {
            row[j] = (number & 64) > 0 ? 1 : 0;
          }
          else if (v1 === 1 && v2 !== 1 && v3 === 1) {
            row[j] = (number & 32) > 0 ? 1 : 0;
          }
          else if (v1 === 1 && v2 !== 1 && v3 !== 1) {
            row[j] = (number & 16) > 0 ? 1 : 0;
          }
          else if (v1 !== 1 && v2 === 1 && v3 === 1) {
            row[j] = (number & 8) > 0 ? 1 : 0;
          }
          else if (v1 !== 1 && v2 === 1 && v3 !== 1) {
            row[j] = (number & 4) > 0 ? 1 : 0;
          }
          else if (v1 !== 1 && v2 !== 1 && v3 === 1) {
            row[j] = (number & 2) > 0 ? 1 : 0;
          }
          else if (v1 !== 1 && v2 !== 1 && v3 !== 1) {
            row[j] = (number & 1) > 0 ? 1 : 0;
          }
        }
      }
      data.push(row);
    }
    const unit = 1;
    let x, y = (0, 0);
    for (let i = 0; i < data.length; i++) {
      const row = data[i];
      x = 0;      
      for (let j = 0; j < row.length; j++) {
        if (row[j] === 1) {
          c.fillRect(x, y, unit, unit);
        }
        x += unit;
      }
      y += unit;
    }
    console.log("x, y:", x, y);
  }
  render() {
    return (
      <canvas ref={this.canvasRef} css={css`
        border: 1px solid black;
        width: ${this.canvasWidth()}px;
        height: ${this.canvasHeight()}px;
      `}></canvas>
    );
  }
}

Canvas.propTypes = propTypes;

export default Canvas;
