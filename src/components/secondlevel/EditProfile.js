import React from 'react'
import RaisedButton from 'material-ui/lib/raised-button';
import TextField from 'material-ui/lib/text-field';

// injectTapEventPlugin();

export default React.createClass ({
  render() {
    return (
      <div className="review">
        <TextField hintText="username" />
        <TextField hintText="displayname" />
        <TextField hintText="A little about yourself" multiLine={true} rows={2} />
        <TextField hintText="location" />
        <RaisedButton label="Save" />
      </div>
    )
  }
})
