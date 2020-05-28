import { createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
    palette: {
        primary: {
          main: '#666666',
        },
        secondary: {
          main: '#eceef7',
        },
        background: {
          paper: '#fff',
          default: '#F8F8F8'
        },
        text: {
          primary: "#666666"
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