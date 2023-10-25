import React from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import ReviewDetails from './components/ReviewDetails'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider, CssBaseline, createTheme } from '@mui/material';

// const theme = createTheme({
//   palette: {
//       primary: {
//           main: '#556cd6',
//       },
//       secondary: {
//           main: '#19857b',
//       },
//   },
// });

function App() {
    return (
        // <ThemeProvider theme={theme}>
            // <div className="App">
            //  {/* <Home /> */}
                // {/* Other components will go here in the future */}
            // </div>
        // {/* </ThemeProvider> */}
        <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/review/:id" element={<ReviewDetails />} />
        </Routes>
      </Router>
    );
}

export default App;

