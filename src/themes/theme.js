import { NoEncryption } from '@mui/icons-material';
import { createTheme } from '@mui/material/styles';

// const defaultShadow = '0 2px 30px -1px rgba(85,85,85,.08),0 4px 30px 0 rgba(85,85,85,.06),0 1px 30px 0 rgba(85,85,85,.03)'

export const theme = createTheme({
  palette: {
    mode: 'light'
  },
  components: {
    MuiDialog: {
      styleOverrides: {
        root: {
          backgroundColor: "rgba(32, 38, 45, 0.2)",
          backdropFilter: "blur(2px)",
          opacity: 1,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
        }
      }
    }
  }
})