import React from 'react';
import { Card, CardContent, Typography, Button, Box, Avatar, Grid2 } from '@mui/material';

const WebinarList = ({ webinars, handleEdit, handleDelete }) => {
  const getBackgroundColor = (index) => {
    const colors = ['#FF6B6B', '#FFA726', '#26C6DA', '#66BB6A'];
    return colors[index % colors.length];
  };

  return (
    <Grid2 container spacing={3}>
      {webinars.map((webinar, index) => (
        <Grid2 item xs={12} sm={6} md={4} key={index} sx={{ width: '23rem' }}>
          <Card
            sx={{
              borderRadius: '16px',
              overflow: 'hidden',
              padding: 2,
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <Box
              sx={{
                backgroundColor: getBackgroundColor(index),
                borderRadius: '16px',
                padding: 2,
                color: 'white',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <Box sx={{ flexGrow: 1 }}>
                <Typography variant="h6">{webinar.instructorName}</Typography>
                <Typography variant="subtitle2">
                  {webinar.instructorRole}
                </Typography>
                <Typography variant="subtitle2">
                    {webinar.instructorCompany}
                </Typography>
              </Box>
              <Avatar
                src={webinar.instructorImage ? URL.createObjectURL(webinar.instructorImage) : ''}
                alt={webinar.instructorName}
                sx={{ width: 60, height: 60 }}
              />
            </Box>

            <CardContent sx={{ padding: 2 }}>
              <Typography sx={{color: getBackgroundColor(index)}} variant="h6">{webinar.topics}</Typography>
              <Typography sx={{fontSize: '1rem', fontWeight: '600'}} variant="h6">{webinar.webinarTitle}</Typography>
              <Typography variant="body2" color="textSecondary">
                {webinar.startDate} • {webinar.startTime} - {webinar.endTime}
              </Typography>
            </CardContent>

            <Box sx={{ display: 'flex', justifyContent: 'flex-start', mt: 2 }}>
              
              <Button
                onClick={() => handleDelete(webinar)}
                variant="contained"
                color="error"
                sx={{ 
                    textTransform: 'none',
                    color: '#d32f2f',
                    backgroundColor: '#f4c5c5',
                    borderRadius: '16px'
                 }}
              >
                Delete
              </Button>
              <Button
                onClick={() => handleEdit(webinar)}
                variant="outlined"
                sx={{ textTransform: 'none', mr: 1, border: 'none' }}
              >
                Edit
              </Button>
            </Box>
          </Card>
        </Grid2>
      ))}
    </Grid2>
  );
};

export default WebinarList;


