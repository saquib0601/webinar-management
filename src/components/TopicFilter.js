import React from 'react';
import { TextField, MenuItem } from '@mui/material';

const TopicFilter = ({ setTopicFilter }) => {
  const topics = ['FullStack', 'Frontend', 'Backend', 'Devops', 'Testing'];

  return (
    <TextField
      select
      label="Topic"
      variant="outlined"
      fullWidth
      onChange={(e) => setTopicFilter(e.target.value)}
    >
      <MenuItem value="">All</MenuItem>
      {topics.map((topic, index) => (
        <MenuItem key={index} value={topic}>{topic}</MenuItem>
      ))}
    </TextField>
  );
};

export default TopicFilter;
