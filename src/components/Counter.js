import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
    root: {
      ...theme.mixins.gutters(),
      paddingTop: theme.spacing.unit * 2,
      paddingBottom: theme.spacing.unit * 2,
    },
  });

class Counter extends Component {
    render() {
        return (
            <div>
                <Button variant="contained" color="primary">-</Button>
                <Paper>
                    <Typography variant="h5" component="h3">
                    This is a sheet of paper.
                    </Typography>
                    <Typography component="p">
                    Paper can be used to build surface or other elements for your application.
                    </Typography>
                </Paper>
                <Button variant="contained" color="primary">+</Button>
            </div>
        );
    }
}

export default Counter;