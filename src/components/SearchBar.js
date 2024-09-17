import React from 'react';
import { TextField, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = ({ setSearchTerm }) => {
  return (
    <TextField
      placeholder="Search for webinars"
      variant="outlined"
      fullWidth
      onChange={(e) => setSearchTerm(e.target.value)}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
      }}

    />
  );
};

export default SearchBar;
