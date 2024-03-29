import React, { Children } from "react";
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

import { Button } from "@mui/material";
import FlightList from "./FlightList";
import TrainList from "./TrainList";
import { useContext } from "react";
import { PackageContext } from "./context/PackageContext";
import { postData } from "./utils/Rest";
import PackageModal from "./PackageModal";


export default function TravelForm() {
  // const { packageId, getPackageId } = useContext(PackageContext);
  // const newPackage = async () => {
  //   const res = await postData('package', true, {
  //     name: "New Package"
  //   })
  //   getPackageId(res.data._id);
  // }
  const [data, setData] = React.useState();
  const { register, handleSubmit } = useForm();
  const [selectedDate, handleDateChange] = React.useState(new Date());
  const submitHandler = (data) => {
    data["DateOfJourney"] = dayjs(selectedDate).format("YYYY-MM-DD");
    data["No_of_people"] = parseInt(data["No_of_people"]);
    data["Source"] = data["Source"].toLowerCase();
    data["Destination"] = data["Destination"].toLowerCase();
    setData(data);
    // packageId ? console.log(packageId) : newPackage();
  };

  const theme = createTheme({
    palette: {
      primary: {
        main: "#562B08",
      },
    },
  });

  const packageCreated = () => {
    if (sessionStorage.getItem("newPackage")) {
      return true;
    }
    else {
      return false;
    }
  }
  const handleModal = () => {

    if (!packageCreated()) {
      setOpenModal(true);
    }
  }

  const [openModal, setOpenModal] = React.useState(false);
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
            className={fs.btn}
            onClick={handleModal}>
            Submit
          </Button>
        </ThemeProvider>
      </form>
      <PackageModal open={openModal} handleClose={(handleModal) => { setOpenModal(false) }} />
      <TravelSection data={{ data }} />
    </div>
  )

}
