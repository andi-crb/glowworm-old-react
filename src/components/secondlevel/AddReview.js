import React from 'react'

import DatePicker from 'material-ui/lib/date-picker/date-picker';
import RaisedButton from 'material-ui/lib/raised-button';
import TextField from 'material-ui/lib/text-field';

// injectTapEventPlugin();

export default React.createClass ({
  render() {
    return (
      <div className="review">
        <TextField hintText="Rating" />
        <TextField hintText="Review" multiLine={true} rows={2} />
        <DatePicker hintText="Date Read" mode="landscape" />
        <RaisedButton label="Save" />
      </div>
    )
  }
})
