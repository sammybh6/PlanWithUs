import React from "react";
import dayjs from "dayjs";
import TextField from "@mui/material/TextField";
import { useForm } from "react-hook-form";
import fs from "../components/style/Forms.module.css";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { createTheme, ThemeProvider } from "@mui/material/styles";
// import purple from "@mui/material/colors/purple";
// import { FetchData, postData } from "../utils/REST";
import StaySection from "./StaySection"
import { Button } from "@mui/material";
export default function StayForms() {
    const { register, handleSubmit } = useForm();
    const [selectedDate, handleDateChange] = React.useState(new Date());
    const [selectedDate1, handleDateChange1] = React.useState(new Date());
    const [data, setData] = React.useState();
    const submitHandler = (data) => {
        data["DateofArrival"] = dayjs(selectedDate).format("YYYY-MM-DD");
        data["DateofDeparture"] = dayjs(selectedDate1).format("YYYY-MM-DD");
        console.log(data);
        console.log(data);
        setData(data);
    };

    const theme = createTheme({
      palette: {
        primary: {
          main: "#562B08",
        },
      },
    });
    
  return (
    <div>
     <form on onSubmit={handleSubmit(submitHandler)} className={fs.form}>
        <TextField
            variant="outlined"
            className={fs.destination}
            // margin="normal"
            required
            id="Destination"
            label="Destination"
            name="Destination"
            autoComplete="Destination"
            // autoFocus
            sx={{ borderColor: '#562B08' }}
            {...register("Destination")}
        />
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DesktopDatePicker
            className={fs.date_of_arrival}
            variant="standard"
            margin="normal"
            required
            id="DateofArrival"
            label="Date of Arrival"
            name="DateofArrival"
            autoComplete="DateofArrival"
            value={selectedDate}
            // autoFocus
            onChange={(newValue) => {
              handleDateChange(newValue);
            }}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DesktopDatePicker
            className={fs.date_of_departure}
            variant="outlined"
            margin="normal"
            required
            id="DateofDeparture"
            label="Date of Departure"
            // name="DateofDeparture"
            autoComplete="DateofDeparture"
            // autoFocus
            value={selectedDate1}
            onChange={(newValue) => {
              handleDateChange1(newValue);
            }}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
        <TextField
            className={fs.no_of_people}
            variant="outlined"
            // margin="normal"
            required
            id="No_of_people"
            label="No of people"
            name="No_of_people"
            autoComplete="No_of_people"
            // autoFocus
            {...register("No_of_people")}
        />
        <ThemeProvider theme={theme}>
          <Button type="submit" 
          variant="contained" 
          color="primary" 
          className={fs.btn}>
            Submit
          </Button>
        </ThemeProvider>
     </form>
     <StaySection data={data}/>
    </div>
  )
}