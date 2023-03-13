import { Button } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import { Person } from "@mui/icons-material";


function App() {
  return (
    <div className="App">
      <h1>React App</h1>
      <Button variant="contained" color="error" startIcon={<DeleteIcon/>} endIcon={<Person/>}>Press ME</Button>
    </div>
  );
}

export default App;
