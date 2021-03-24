import React from "react";
import {makeStyles, AppBar, Button, IconButton, Toolbar, Typography} from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow:1,
    },
    header: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        flexWrap: "wrap",
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    navbar: {
        boxShadow: "none",
        backgroundColor: "#003366",
    },
}));

const Header = () => {
    const classes = useStyles();

    const [state, setState] = React.useState("");

    const toggleDrawer = (open) => (event) => {
        if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
            return;
        }
        setState(open);
    };

    return (
        <div>
           <AppBar position={"static"} className={classes.navbar}>
               <Toolbar>

                   <IconButton onClick={toggleDrawer(true)} edge="start" className={classes.menuButton} color={"inherit"} aria-label="menu">
                       <MenuIcon/>
                   </IconButton>
                   <Typography variant="h6" className={classes.title}>
                       News
                   </Typography>
                   <Button color="inherit">Login</Button>
               </Toolbar>
           </AppBar>
        </div>
    );
}

export default Header;