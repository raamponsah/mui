import { Button } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import { PersonPinCircle, Send } from "@mui/icons-material";


function App() {
  return (
    <div className="App">
      <h1>React App</h1>
      <Button variant="outlined"  size="large" color="primary" startIcon={<DeleteIcon/>} endIcon={<PersonPinCircle/>}>Press ME</Button>
      <Button variant="contained" color="success" size="larger" endIcon={<Send/>}>Send</Button>
    </div>
  );
}

export default App;
