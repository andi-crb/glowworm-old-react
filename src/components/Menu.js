import React from 'react'
import AppBar from 'material-ui/lib/app-bar'

export default React.createClass ({
  render() {
    return (
      <div>
      <AppBar
        title="glowworm"
        iconClassNameRight="muidocs-icon-navigation-expand-more"
      />
      </div>
    )
  }
})
