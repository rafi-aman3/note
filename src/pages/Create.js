import { Button, Container, FormControl, FormControlLabel, FormLabel, makeStyles, Radio, RadioGroup, TextField, Typography } from '@material-ui/core'
import { KeyboardArrowRightOutlined } from '@material-ui/icons'
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';


const useStyles = makeStyles({
  field: {
    marginTop: 20,
    marginBottom: 20,
    display: "block"
  }

})


export default function Create() {
  const [title, setTitle] = useState('');
  const [details, setDetails] = useState('');
  const [titleError, setTitleError] = useState(false);
  const [detailsError, setDetailsError] = useState(false);
  const [category, setCategory] = useState('sports');

  const history = useHistory()

  const handleSubmit = (e) => {
    e.preventDefault();
    setTitleError(false);
    setDetailsError(false);


    if (title == '') {
      setTitleError(true)
    }

    if (details == '') {
      setDetailsError(true)
    }


    if (title && details) {
      fetch('http://localhost:8000/notes', {
        method: 'POST',
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify({ title, details, category })
      }).then(() => history.push('/'))
    }

  }

  const classes = useStyles()
  return (
    <Container>
      <Typography
        variant="h6"
        color="secondary"
        component="h2"
        gutterBottom
      >
        Create a New Note
      </Typography>

      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField
          onChange={(e) => setTitle(e.target.value)}
          className={classes.field}
          label="Note Title"
          variant="outlined"
          fullWidth
          required
          error={titleError}
        />
        <TextField
          onChange={(e) => setDetails(e.target.value)}
          className={classes.field}
          label="Details"
          variant="outlined"
          fullWidth
          required
          multiline
          rows={4}
          error={detailsError}
        />

        <FormControl className={classes.field}>
          <FormLabel>Category</FormLabel>
          <RadioGroup value={category} onChange={(e) => setCategory(e.target.value)}>
            <FormControlLabel value="art" control={<Radio />} label="Art" />
            <FormControlLabel value="history" control={<Radio />} label="History" />
            <FormControlLabel value="sports" control={<Radio />} label="Sports" />
          </RadioGroup>
        </FormControl>

        <Button
          type="submit"
          color="secondary"
          variant="contained"
          endIcon={<KeyboardArrowRightOutlined />}
        >
          Submit

      </Button>

      </form>



    </Container>
  )
}
