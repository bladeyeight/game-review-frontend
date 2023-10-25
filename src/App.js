import React from 'react';
import './App.css';
import Header from './components/Header';
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
            <div className="App">
                <Header />
                {/* Other components will go here in the future */}
            </div>
        // {/* </ThemeProvider> */}
    );
}

export default App;

