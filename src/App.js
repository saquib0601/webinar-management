import React, { useState, useMemo } from 'react';
import { Button, Container, Dialog, DialogContent, DialogTitle, Divider, Grid2, Typography, IconButton } from '@mui/material';
import WebinarList from './components/WebinarList';
import SearchBar from './components/SearchBar';
import TopicFilter from './components/TopicFilter';
import WebinarForm from './components/WebinarForm';
import CloseIcon from '@mui/icons-material/Close';

const App = () => {
  const [webinars, setWebinars] = useState([]);
  const [open, setOpen] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [selectedWebinar, setSelectedWebinar] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [topicFilter, setTopicFilter] = useState('');

  const handleOpen = (webinar = null) => {
    setSelectedWebinar(webinar);
    setEditMode(!!webinar);
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  const handleSave = (data) => {
    if (editMode) {
      setWebinars(webinars.map((w) => (w === selectedWebinar ? data : w)));
    } else {
      setWebinars([...webinars, data]);
    }
    handleClose();
  };

  const handleDelete = (webinarToDelete) => {
    setWebinars(webinars.filter((w) => w !== webinarToDelete));
  };

  const filteredWebinars = webinars
  .filter((webinar) =>
    searchTerm
      ? Object.values(webinar).some((value) =>
          value && typeof value === 'string' && value.toLowerCase().includes(searchTerm.toLowerCase())
        )
      : true
  )
  .filter((webinar) => (topicFilter ? webinar.topics === topicFilter : true));

  const uniqueTopics = useMemo(() => {
    const topicsSet = new Set(webinars.map(webinar => webinar.topics).filter(Boolean));
    return Array.from(topicsSet);
  }, [webinars]);

  return (
    <Container sx={{ marginTop: 4 }}>
      <Grid2 container spacing={2} alignItems="center" justifyContent="space-between">
      <Typography variant="h5" sx={{ marginY: 3 }}>Webinars</Typography>
        <Grid2 item xs={6}>
          <Button variant="contained" onClick={() => handleOpen()}>Add Webinar</Button>
        </Grid2>
      </Grid2>

      <Divider/>

      <Grid2 sx={{ mt: 2, paddingBottom: '16px' }} container spacing={2} alignItems="center" justifyContent="space-between">
        <Grid2 item xs={6}>
          <SearchBar setSearchTerm={setSearchTerm} />
        </Grid2>
        <Grid2 sx={{width: '9rem'}} item xs={6}>
          <TopicFilter topics={uniqueTopics} setTopicFilter={setTopicFilter} />
        </Grid2>
      </Grid2>

      <WebinarList webinars={filteredWebinars} handleEdit={handleOpen} handleDelete={handleDelete} />

      <Dialog open={open} 
        fullWidth maxWidth="md">
        <DialogTitle sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography sx={{fontWeight: '600'}}>Create Webinar</Typography>
          <IconButton onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <Divider/>
        <DialogContent>
          <WebinarForm
            editMode={editMode}
            initialData={selectedWebinar}
            handleSave={handleSave}
            onClose={handleClose}
          />
        </DialogContent>
        <Divider/>
      </Dialog>
    </Container>
  );
};

export default App;
