import React from 'react';
import "../styles/global.scss"
class Layout extends React.Component {
  render() {
    const { children } = this.props
    return (
      <div>
        {children}
      </div>
    )
  }
}

export default Layout
