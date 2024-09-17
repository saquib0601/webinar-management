import React from 'react';
import { TextField, MenuItem } from '@mui/material';

const TopicFilter = ({ topics, setTopicFilter }) => {

  return (
    <TextField
      select
      label="Topic"
      variant="outlined"
      fullWidth
      onChange={(e) => setTopicFilter(e.target.value)}
    >
      {topics.length > 0 && <MenuItem value="">All</MenuItem>}
      {topics.map((topic, index) => (
        <MenuItem key={index} value={topic}>{topic}</MenuItem>
      ))}
    </TextField>
  );
};

export default TopicFilter;
