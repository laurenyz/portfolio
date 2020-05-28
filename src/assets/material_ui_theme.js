import { createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
    palette: {
        primary: {
          main: '#ab003c',
        },
        secondary: {
          main: '#eceef7',
        },
        background: {
          paper: '#fff',
          default: '#eceef1'
        },
      },
    typography: {
      fontFamily: [
        "Open Sans",
        'sans-serif',
      ].join(','),
    }
  });

export default theme