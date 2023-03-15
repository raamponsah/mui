
import { Sidebar } from "./components/Sidebar";
import { RightBar } from "./components/RightBar";
import { Feed } from "./components/Feed";
import { Box, Stack } from "@mui/material";
import { Navbar } from "./components/Navbar";


function App() {
  return (
    <Box className="App">
      <Navbar/>
    <Stack direction="row" spacing={2} justifyContent="space-between">
        <Sidebar/>
        <Feed/>
        <RightBar/>
        </Stack>
    </Box>
  );
}

export default App;
