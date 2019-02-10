import React from 'react';
import { css } from "@emotion/core"

class Canvas extends React.Component {
  constructor(props) {
    super(props);
    this.canvasRef = React.createRef();
  }
  componentDidMount() {
    const canvas = this.canvasRef.current;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    this.draw(canvas.getContext('2d'));
  }
  draw(c) {
    const max = 1000;
    const data = [];
    for (let i = 0; i < max; i++) {
      const row = new Array(max * 2);
      if (i === 0) {
        row[max] = 1;
      }
      else {
        const prevRow = data[data.length - 1];
        for (let j = 0; j < max * 2; j++) {
          if (prevRow[j-1] === 1 && prevRow[j] === 1 && prevRow[j+1] === 1) {
            row[j] = 0;
          }
          else if (prevRow[j-1] === 1 && prevRow[j] === 1 && prevRow[j+1] !== 1) {
            row[j] = 0;
          }
          else if (prevRow[j-1] === 1 && prevRow[j] !== 1 && prevRow[j+1] === 1) {
            row[j] = 0;
          }
          else if (prevRow[j-1] === 1 && prevRow[j] !== 1 && prevRow[j+1] !== 1) {
            row[j] = 1;
          }
          else if (prevRow[j-1] !== 1 && prevRow[j] === 1 && prevRow[j+1] === 1) {
            row[j] = 1;
          }
          else if (prevRow[j-1] !== 1 && prevRow[j] === 1 && prevRow[j+1] !== 1) {
            row[j] = 1;
          }
          else if (prevRow[j-1] !== 1 && prevRow[j] !== 1 && prevRow[j+1] === 1) {
            row[j] = 1;
          }
          else if (prevRow[j-1] !== 1 && prevRow[j] !== 1 && prevRow[j+1] !== 1) {
            row[j] = 0;
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
  }
  render() {
    return (
      <canvas ref={this.canvasRef} css={css`
        border: 1px solid black;
        width: 100%;
        height: 100%;
      `}></canvas>
    );
  }
}

export default Canvas;
