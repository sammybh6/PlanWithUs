import React from "react";
import dayjs from "dayjs";
import TextField from "@mui/material/TextField";
import { useForm } from "react-hook-form";
import fs from "../components/style/Forms.module.css";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// import { FetchData, postData } from "../utils/REST";
import { Button } from "@mui/material";
export default function Forms() {
    const { register, handleSubmit } = useForm();
    const submitHandler = (data) => {
        console.log(data);
    };
    const [selectedDate1, handleDateChange1] = React.useState(new Date());
    
    const [selectedDate2, handleDateChange2] = React.useState(new Date());

  return (
    <div>
     <form on onSubmit={handleSubmit(submitHandler)} className={fs.form}>
        <TextField
            className={fs.form.destination}
            // margin="normal"
            required
            id="Destination"
            label="Destination"
            name="Destination"
            autoComplete="Destination"
            autoFocus
            {...register("Destination")}
        />
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DesktopDatePicker
            className={fs.form.date_of_arrival}
            margin="normal"
            required
            id="DateofArrival"
            label="Date of  Arrival"
            name="DateofArrival"
            autoComplete="DateofArrival"
            autoFocus
            {...register("DateofArrival")}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DesktopDatePicker
            className={fs.date_of_departure}
            margin="normal"
            required
            id="DateofDeparture"
            label="Date of Departure"
            name="DateofDeparture"
            autoComplete="DateofDeparture"
            autoFocus
            {...register("DateofDeparture")}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
        <TextField
            className={fs.form.no_of_people}
            // margin="normal"
            required
            id="No_of_people"
            label="No of people"
            name="No_of_people"
            // autoComplete="No_of_people"
            autoFocus
            {...register("No_of_people")}
        />
        <Button type="submit" 
        variant="contained" 
        color="primary" 
        className={fs.form.button}>
          Submit
        </Button>
     </form>
    </div>
  )
}
