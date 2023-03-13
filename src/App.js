import { Button } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import { PersonPinCircle } from "@mui/icons-material";


function App() {
  return (
    <div className="App">
      <h1>React App</h1>
      <Button variant="contained" size="large" color="info" startIcon={<DeleteIcon/>} endIcon={<PersonPinCircle/>}>Press ME</Button>
    </div>
  );
}

export default App;
