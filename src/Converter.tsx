import * as React from 'react'
import { Card, CardContent, Container, Divider, Grid, List, ListItem, TextField, Typography, InputAdornment } from '@mui/material';

import NumberFormat from 'react-number-format';

import convert_to_time from 'chronos'

interface CustomProps {
  onChange: (event: { target: { name: string; value: string } }) => void;
  name: string;
}

const NumberFormatCustom = React.forwardRef<NumberFormat, CustomProps>(
  function NumberFormatCustom(props, ref) {
    const { onChange, ...other } = props;

    return (
      <NumberFormat
        {...other}
        getInputRef={ref}
        onValueChange={(values) => {
          onChange({
            target: {
              name: props.name,
              value: values.value,
            },
          })
        }}
        thousandSeparator
        isNumericString
        allowLeadingZeros={false}
      />
    );
  },
);

interface State {
  seconds: number;
  minutes: number;
  hours: number;
  days: number;
  weeks: number;
  months: number;
  years: number;
}

const Converter = () => {

  const [time, setTime] = React.useState<State>({
    seconds: 0,
    minutes: 0,
    hours: 0,
    days: 0,
    weeks: 0,
    months: 0,
    years: 0,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let { value } = event.target;
    if (value !== "") {
      let seconds = parseInt(value);
      let time = convert_to_time(seconds);
      setTime({ ...time, seconds: seconds });
    }
  };

  return (
    <Container component="div" maxWidth="sm" disableGutters>
      <Card>
        <CardContent>
          <TextField
            variant="outlined"
            fullWidth
            color="success"

            label="Assuming $1 equals 1 second,"
            id="seconds"
            name="seconds"
            value={time.seconds}
            onChange={handleChange}

            InputProps={{
              inputComponent: NumberFormatCustom as any,
              style: { fontSize: 50, color: "green" },
              multiline: true
            }}
          />
          <Container>
            <List>
              <Divider sx={{ my: 2 }} >seconds is approximately</Divider>
              <ListItem>
                <Grid item xs><Typography>Minutes:</Typography></Grid>
                <Grid item xs><Typography>{time.minutes}</Typography></Grid>
              </ListItem>
              <ListItem>
                <Grid item xs><Typography>Hours:</Typography></Grid>
                <Grid item xs><Typography>{time.hours}</Typography></Grid>
              </ListItem>
              <ListItem>
                <Grid item xs><Typography>Days:</Typography></Grid>
                <Grid item xs><Typography>{time.days}</Typography></Grid>
              </ListItem>
              <ListItem>
                <Grid item xs><Typography>Weeks:</Typography></Grid>
                <Grid item xs><Typography>{time.weeks}</Typography></Grid>
              </ListItem>
              <ListItem>
                <Grid item xs><Typography>Months:</Typography></Grid>
                <Grid item xs><Typography>{time.months}</Typography></Grid>
              </ListItem>
              <ListItem>
                <Grid item xs><Typography>Years:</Typography></Grid>
                <Grid item xs><Typography>{time.years}</Typography></Grid>
              </ListItem>
            </List>
          </Container>
        </CardContent>
      </Card>
    </Container >
  );
}

export default Converter;