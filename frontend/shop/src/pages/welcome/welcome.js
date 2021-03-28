import React from "react";
import {Button} from "@material-ui/core";
import {Link} from "react-router-dom";
import {makeStyles } from "@material-ui/core/styles";

import image from "./market_background.jpg";

const useStyles = makeStyles({
    root: {
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        textAlign: "center",
        height: "100%",
        width: "100%",
        color: 'white',
        position: "absolute"
    },

    clickButton: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 100%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        height: 48,
        padding: '0 30px',
        textAlign: "center",
    },

    header: {
    },
});

const Welcome = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <h2 className={classes.header}>Welcome to the WebShop</h2>
            <Button className={classes.clickButton} component={Link} to={"register"}>Click to Enter Site</Button>
        </div>

    );
};

export default Welcome;