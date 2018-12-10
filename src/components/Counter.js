import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

class Counter extends Component {
    state = {
        id: this.props.id,
        productName: this.props.name,
        count: 1,
        error: false,
    }

    increamentCount = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    decreamentCount = () => {
        if (this.state.count <= 0) return;
        this.setState({
            count: this.state.count - 1
        })
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        if (prevState.count !== this.state.count) {
            console.log('snapshot changed');

            return {
                count:prevState.count
            };
        }

    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (snapshot) {
            console.log('value 값이 바뀌었다!', snapshot.count);
        }
    }

    componentDidCatch(error, info) {
        console.log(error);
        console.log(info);

        this.setState({
            error: true,
        })
    }

    render() {
        if (this.state.error) {
            return (
                <div>에러가 발생하였습니다.</div>
            )
        }
        return (
            <div>
                {this.props.missing}
                    <AppBar position="static" color="default">
                        <Typography variant="h6" color="inherit">
                            <Toolbar>
                            <Button variant="contained" color="primary" onClick={this.decreamentCount}>-</Button>
                                상품 : {this.props.product.name} 수량 : {this.state.count}
                            <Button variant="contained" color="primary" onClick={this.increamentCount}>+</Button>
                            </Toolbar>
                        </Typography>
                    </AppBar>
            </div>
        );
    }
}

export default Counter;