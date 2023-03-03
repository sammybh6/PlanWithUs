// import React from 'react';
// import TextField from '@material-ui/core/TextField';
// import 'tw-elements';
  
// const Form = () => {
//     const options = {
//         format: "dd-mm-yyyy",
//       };
//       const myDatepicker = new te.Datepicker(
//         document.getElementById("myDatepicker"),
//         data-te-cancelBtnLabel= "monthsFull",
//         data-te-okBtnLabel= "monthsShort",
//       );
      
//   return (
//     <div>Form</div>
//   );
// }
  
// export default Form;
import * as React from 'react';

import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

export default function BasicDatePicker() {
  const [value, setValue] = React.useState(null);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        label="Basic example"
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
  );
}