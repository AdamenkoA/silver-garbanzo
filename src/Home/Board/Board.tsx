import React from 'react';
import {makeStyles, createStyles, Theme} from '@material-ui/core/styles';
import Grid, {GridSpacing} from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import SimpleCard from "./Card";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            flexWrap: 'wrap',
            flexGrow: 1,
            height: 'auto',
            width: 'auto',
        },
        paper: {
            margin: theme.spacing(1),
            height: 'auto',
            width: 'auto',
            textAlign: 'center',
            color: theme.palette.text.secondary,
        },
        control: {
            padding: theme.spacing(2),
        },
    }),
);

export default function SpacingGrid() {
    const [spacing, setSpacing] = React.useState<GridSpacing>(2);
    const classes = useStyles();

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSpacing(Number((event.target as HTMLInputElement).value) as GridSpacing);
    };

    return (

        <div className={classes.root}>
            <Grid container justify="center" spacing={spacing} direction="row" alignItems="stretch">
                {[0, 1, 2, 3].map((value) => (
                    <Grid key={value} item>
                        <Paper className={classes.paper}>
                            <SimpleCard/>
                        </Paper>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
}
