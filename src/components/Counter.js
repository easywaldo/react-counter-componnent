import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import classNames from 'classnames';
import Icon from '@material-ui/core/Icon';
import red from '@material-ui/core/colors/red';

const styles = theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  icon: {
    margin: theme.spacing.unit * 2,
  },
  iconHover: {
    margin: theme.spacing.unit * 2,
    '&:hover': {
      color: red[800],
    },
  },
});


class Counter extends Component {
    state = {
        count: 0
    }

    addCount = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    substract = () => {
        this.setState({
            count: this.state.count - 1
        })
    }

    render() {
        const { classes } = this.props;

        return (
            <div className={classes}>
                <Button variant="contained" color="primary" onClick={this.substract}>-</Button>
                <Paper>
                    <Typography variant="h5" component="h3">
                    상품수량 카운터
                    </Typography>
                    <Typography component="p">
                    {this.state.count}
                    </Typography>
                </Paper>
                <Button variant="contained" color="primary" onClick={this.addCount}>+</Button>
            </div>
        );
    }
}

export default Counter;