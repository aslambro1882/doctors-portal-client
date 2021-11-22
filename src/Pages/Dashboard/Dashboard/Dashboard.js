import * as React from 'react';
import PropTypes from 'prop-types';
import {
    Button,
    CssBaseline,
    Box,
    AppBar,
    Typography,
    Toolbar,
    Drawer,
    Divider,
    ListItemText,
    ListItemIcon,
    List,
    ListItem,
    IconButton
} from '@mui/material';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import DashboardHome from '../DashboardHome/DashboardHome';
import {
    Switch,
    Route,
    NavLink,
    useRouteMatch
} from "react-router-dom";
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import AddDoctor from '../AddDoctor/AddDoctor';
import useAuth from './../../../hooks/useAuth'
import AdminRoute from '../../Login/AdminRoute/AdminRoute';
import Payment from '../Payment/Payment';

const drawerWidth = 200;

function Dashboard({ window }) {
    const [mobileOpen, setMobileOpen] = React.useState(false);
    let { path, url } = useRouteMatch();
    const { admin } = useAuth();
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <Toolbar />
            <Divider />
            <NavLink style={{ textDecoration: 'none', color: 'black' }} to="/appointment"><Button color="inherit" variant="contained">Appointment</Button></NavLink>
            <NavLink style={{ textDecoration: 'none', color: 'black' }} to={`${url}`}><Button color="inherit" variant="contained">Dashboard</Button></NavLink>
            {/* <NavLink style={{ textDecoration: 'none', color: 'black' }} to={`${url}/payment`}><Button color="inherit" variant="contained">Payment</Button></NavLink> */}
            {admin &&
                <Box>
                    <NavLink style={{ textDecoration: 'none', color: 'black' }} to={`${url}/makeAdmin`}><Button color="inherit" variant="contained">Make Admin</Button></NavLink>
                    <NavLink style={{ textDecoration: 'none', color: 'black' }} to={`${url}/addDoctor`}><Button color="inherit" variant="contained">Add Doctor</Button></NavLink>
                </Box>
            }
            <List>
                {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>
                            {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                        </ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
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
                    <Typography variant="h6" noWrap component="div">
                        Dashboard
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
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
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />
                <Switch>
                    <Route exact path={path}>
                        <DashboardHome></DashboardHome>
                    </Route>
                    <Route path={`${path}/payment/:appointmentId`}>
                        <Payment></Payment>
                    </Route>
                    <AdminRoute path={`${path}/makeAdmin`}>
                        <MakeAdmin></MakeAdmin>
                    </AdminRoute>
                    <AdminRoute path={`${path}/addDoctor`}>
                        <AddDoctor></AddDoctor>
                    </AdminRoute>

                </Switch>
            </Box>
        </Box>
    );
}

Dashboard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Dashboard;
