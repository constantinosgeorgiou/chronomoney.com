import * as React from 'react'
import { Card, CardContent, Container, InputAdornment, TextField, Typography } from '@mui/material';
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
    <Container component="main" maxWidth="sm" disableGutters>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <TextField
            variant="standard"
            fullWidth
            sx={{ m: 1 }}
            color="success"
            label="Seconds"
            InputProps={{
              startAdornment: <InputAdornment position="start">$</InputAdornment>,
              inputComponent: NumberFormatCustom as any,
            }}
            id="seconds"
            name="seconds"
            value={time.seconds}
            onChange={handleChange}
          />

          <Typography>Minutes: {time.minutes}</Typography>
          <Typography>Hours: {time.hours}</Typography>
          <Typography>Days: {time.days}</Typography>
          <Typography>Weeks: {time.weeks}</Typography>
          <Typography>Months: {time.months}</Typography>
          <Typography>Years: {time.years}</Typography>
        </CardContent>
      </Card>
    </Container>
  );
}

export default Converter;