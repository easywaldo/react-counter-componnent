import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.product.id,
            productName: this.props.product.name,
            increasementSize: this.props.product.size,
            count: this.props.product.count,
            error: false
        };
    }

    increamentCount = () => {
        console.log(this.state.incrementSize);
        this.setState({
            count: this.state.count + this.state.increasementSize
        })
    }

    decreamentCount = () => {
        if (this.state.count <= this.state.increasementSize) return;
        this.setState({
            count: this.state.count - this.state.increasementSize
        })
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        if (prevState.count !== this.state.count) {
            console.log('snapshot changed');

            return {
                count:prevState.count,
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
                <Container maxWidth="sm">

                    <AppBar position="static" color="default">
                        <Typography variant="h6" color="inherit">
                            <Toolbar>
                                상품 : [{this.state.id}]{this.state.productName}
                                <br/>
                                수량 : {this.state.count}
                            <Button 
                                variant="contained"
                                color="primary"
                                onClick={this.increamentCount}>+
                            </Button>
                            <Button variant="contained" color="primary" 
                                onClick={this.decreamentCount}>-
                            </Button>
                            </Toolbar>
                        </Typography>
                    </AppBar>

                </Container>
            </div>
        );
    }
}

export default Counter;