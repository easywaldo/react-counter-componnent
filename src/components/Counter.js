import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

class Counter extends Component {
    state = {
        id: 0,
        productName: "",
        count: 0
    }

    addCount = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    substract = () => {
        if (this.state.count <= 0) return;
        this.setState({
            count: this.state.count - 1
        })
    }

    render() {
        return (
            <div>
                    <AppBar position="static" color="default">
                        <Typography variant="h6" color="inherit">
                            <Toolbar>
                            <Button variant="contained" color="primary" onClick={this.substract}>-</Button>
                                상품 : {this.props.product.name} 수량 : {this.state.count}
                            <Button variant="contained" color="primary" onClick={this.addCount}>+</Button>
                            </Toolbar>
                        </Typography>
                    </AppBar>
            </div>
        );
    }
}

export default Counter;