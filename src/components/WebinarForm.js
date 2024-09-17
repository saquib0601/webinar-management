import React from "react";
import {
  TextField,
  Button,
  Box,
  Divider,
  Typography,
  IconButton,
} from "@mui/material";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import VideocamOutlinedIcon from "@mui/icons-material/VideocamOutlined";

const validationSchema = Yup.object({
  instructorName: Yup.string().required("Instructor Name is required"),
  instructorRole: Yup.string().required("Instructor Role is required"),
  instructorCompany: Yup.string().required("Instructor Company is required"),
  topics: Yup.string().required("Topic is required"),
  webinarTitle: Yup.string().required("Webinar Title is required"),
  startDate: Yup.string().required("Date is required"),
  startTime: Yup.string().required("Start time is required"),
  endTime: Yup.string().required("End time is required"),
});

const WebinarForm = ({ editMode, initialData, handleSave, onClose }) => {
  const initialValues = initialData || {
    instructorName: "",
    instructorRole: "",
    instructorCompany: "",
    instructorImage: null,
    topics: "",
    webinarTitle: "",
    startDate: null,
    startTime: null,
    endTime: null,
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        handleSave(values);
        resetForm();
      }}
    >
      {({
        values,
        handleChange,
        handleBlur,
        setFieldValue,
        touched,
        errors,
      }) => (
        <Form>
          <Box sx={{ display: "flex", alignItems: "center", paddingBottom: 2 }}>
            <GroupOutlinedIcon sx={{ marginRight: 1 }} />
            <Typography variant="h6">Instructor Details</Typography>
          </Box>
          <Box
            sx={{
              display: "grid",
              gap: 2,
              gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
              alignItems: "center",
            }}
          >
            <Box>
              <Box>
                <Typography variant="subtitle1">
                  Instructor Name <span style={{ color: "red" }}>*</span>
                </Typography>
                <TextField
                  label="Type the instructor name"
                  name="instructorName"
                  fullWidth
                  variant="outlined"
                  value={values.instructorName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={
                    touched.instructorName && Boolean(errors.instructorName)
                  }
                  helperText={touched.instructorName && errors.instructorName}
                />
              </Box>

              <Box sx={{ mt: 2 }}>
                <Typography variant="subtitle1">
                  Instructor Role <span style={{ color: "red" }}>*</span>
                </Typography>
                <TextField
                  label="Type the instructor role"
                  name="instructorRole"
                  fullWidth
                  variant="outlined"
                  value={values.instructorRole}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={
                    touched.instructorRole && Boolean(errors.instructorRole)
                  }
                  helperText={touched.instructorRole && errors.instructorRole}
                />
              </Box>

              <Box sx={{ mt: 2 }}>
                <Typography variant="subtitle1">
                  Instructor Company <span style={{ color: "red" }}>*</span>
                </Typography>
                <TextField
                  label="Type the instructor company"
                  name="instructorCompany"
                  fullWidth
                  variant="outlined"
                  value={values.instructorCompany}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={
                    touched.instructorCompany &&
                    Boolean(errors.instructorCompany)
                  }
                  helperText={
                    touched.instructorCompany && errors.instructorCompany
                  }
                />
              </Box>
            </Box>

            <Box>
              <Typography variant="subtitle1">Instructor Image</Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  border: "1px dashed #ccc",
                  borderRadius: "5px",
                  paddingLeft: "80px",
                  color: "#888",
                  width: "8rem",
                  height: "9.6rem",
                }}
              >
                <input
                  accept="image/*"
                  type="file"
                  id="instructorImage"
                  style={{ display: "none" }}
                  onChange={(event) =>
                    setFieldValue(
                      "instructorImage",
                      event.currentTarget.files[0]
                    )
                  }
                />
                <label htmlFor="instructorImage">
                  <IconButton
                    color="primary"
                    aria-label="upload picture"
                    component="span"
                  >
                    <PhotoCamera />
                  </IconButton>
                </label>
                {values.instructorImage && (
                  <Typography
                    sx={{
                      marginLeft: 2,
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                      width: "100%",
                    }}
                  >
                    {values.instructorImage.name}
                  </Typography>
                )}
              </Box>
              <Box sx={{ mt: 2 }}>
                <Typography variant="subtitle1">
                  Topics <span style={{ color: "red" }}>*</span>
                </Typography>
                <TextField
                  label="Type the topics"
                  name="topics"
                  fullWidth
                  variant="outlined"
                  value={values.topics}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.topics && Boolean(errors.topics)}
                  helperText={touched.topics && errors.topics}
                />
              </Box>
            </Box>
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              marginTop: 3,
              paddingBottom: 2,
            }}
          >
            <VideocamOutlinedIcon sx={{ marginRight: 1 }} />
            <Typography variant="h6">Webinar Details</Typography>
          </Box>
          <Box sx={{ display: "grid", gap: 2 }}>
            <Typography variant="subtitle1">
              Webinar Title <span style={{ color: "red" }}>*</span>
            </Typography>
            <TextField
              label="Type the webinar title"
              name="webinarTitle"
              fullWidth
              variant="outlined"
              value={values.webinarTitle}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.webinarTitle && Boolean(errors.webinarTitle)}
              helperText={touched.webinarTitle && errors.webinarTitle}
            />
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr",
                gap: 2,
                width: "75%",
              }}
            >
              <Box>
                <Typography variant="subtitle1">
                  StartDate <span style={{ color: "red" }}>*</span>
                </Typography>
                <Field
                  name="startDate"
                  as={TextField}
                  type="date"
                  fullWidth
                  error={touched.startDate && Boolean(errors.startDate)}
                  helperText={touched.startDate && errors.startDate}
                />
              </Box>
              <Box>
                <Typography variant="subtitle1">
                  StartTime <span style={{ color: "red" }}>*</span>
                </Typography>
                <Field
                  name="startTime"
                  as={TextField}
                  type="time"
                  fullWidth
                  error={touched.startTime && Boolean(errors.startTime)}
                  helperText={touched.startTime && errors.startTime}
                />
              </Box>
              <Box>
                <Typography variant="subtitle1">
                  EndDate <span style={{ color: "red" }}>*</span>
                </Typography>
                <Field
                  name="endTime"
                  as={TextField}
                  type="time"
                  fullWidth
                  error={touched.endTime && Boolean(errors.endTime)}
                  helperText={touched.endTime && errors.endTime}
                />
              </Box>
            </Box>
          </Box>

          <Divider sx={{ mt: 2, paddingBottom: "16px" }} />

          <Box sx={{ marginTop: 3 }}>
            <Button type="submit" variant="contained" color="primary">
              {editMode ? "Edit Webinar" : "Create Webinar"}
            </Button>
            <Button
              sx={{
                marginLeft: 2,
                color: '#1a69c7',
                backgroundColor: 'white',
                boxShadow: 'none'
              }}
              onClick={onClose}
              variant="contained"
              color="secondary"
            >
              Cancel
            </Button>
          </Box>
        </Form>
      )}
    </Formik>
  );
};

export default WebinarForm;
