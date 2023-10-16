import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from 'next/link';

const drawerWidth = 240;

export default function Navbar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
    <Typography variant="h6" sx={{ my: 2 }}>
      MUI
    </Typography>
    <Divider />
    <List>
      <Link href="/home">
        <Button key="Home" sx={{ display: 'block' }}>
          Home
        </Button>
      </Link>
  
      <Link href="/about">
        <Button key="About" sx={{ display: 'block' }}>
          About
        </Button>
      </Link>
  
      <Link href="/portfolio">
        <Button key="Portfolio" sx={{ display: 'block' }}>
          Portfolio
        </Button>
      </Link>
    </List>
  </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav" sx={{ background: 'linear-gradient(90deg,#001568,#000);'}}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            
            Jonathan Cortoppassi - Desenvolvedor Jr.
          </Typography>
          
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>

          <Link href="/home">
            <Button key="Home" sx={{ color: '#fff', border: 'none', cursor: 'pointer' }}>
              Home
            </Button>
            </Link>

            <Link href="/about">
            <Button key="About" sx={{ color: '#fff', border: 'none', cursor: 'pointer' }}>
              About
            </Button>
            </Link>

            <Link href="/portfolio">
            <Button key="Portfolio" sx={{ color: '#fff', border: 'none', cursor: 'pointer' }}>
              Portfolio
            </Button>
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}