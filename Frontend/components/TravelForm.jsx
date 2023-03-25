import React from "react";
import dayjs from "dayjs";
import TextField from "@mui/material/TextField";
import { useForm } from "react-hook-form";
import fs from "../components/style/Forms.module.css";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import TravelSection from "./TravelSection";
import purple from "@mui/material/colors/purple";
// import { FetchData, postData } from "../utils/REST";
import { Button } from "@mui/material";
import FlightList from "./FlightList";
import TrainList from "./TrainList";
export default function TravelForm() {
    const { register, handleSubmit } = useForm();
    const TravelContext=React.createContext();
    const [selectedDate, handleDateChange] = React.useState(new Date());
    const [data, setData] = React.useState([]);
    const submitHandler = (data) => {
        data["DateOfJourney"] = dayjs(selectedDate).format("YYYY-MM-DD");
        data["No_of_people"] = parseInt(data["No_of_people"]);
        data["Source"] = data["Source"].toLowerCase();  
        data["Destination"] = data["Destination"].toLowerCase();
        console.log(data);
        setData(data);
      };
      <TravelContext.Provider value={data}>
        <FlightList/>
        <TrainList/>
      </TravelContext.Provider>
      const theme = createTheme({
      palette: {
        primary: {
          main: "#562B08",
        },
      },
    });
    
  return (
    <div>
     <form onSubmit={handleSubmit(submitHandler)} className={fs.form}>
        <TextField
            variant="outlined"
            className={fs.destination}
            // margin="normal"
            required
            id="Source"
            label="Source"
            name="Source"
            autoComplete="Source"
            // autoFocus
            sx={{ borderColor: '#562B08' }}
            {...register("Source")}
        />
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
            id="DateOfJourney"
            label="Date of Journey"
            name="DateOfJourney"
            autoComplete="DateOfJourney"
            value={selectedDate}
            // autoFocus
            onChange={(newValue) => {
              handleDateChange(newValue);
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
      <TravelSection data={data} />
    </div>
  )
}
