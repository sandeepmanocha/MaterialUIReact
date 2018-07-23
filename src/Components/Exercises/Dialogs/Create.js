import React, { Component, Fragment } from 'react'
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import AddIcon from '@material-ui/core/Icon';

export default class extends Component{

    state = {
        open: false,
    }

    handleClickOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    render(){

        return(
            <Fragment>
                <Button variant='fab' onClick={this.handleClickOpen} mini>
                    <AddIcon />
                </Button>
                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                >
                    <DialogTitle id="form-dialog-title">
                        Create a new exercise
                    </DialogTitle>
                    
                    <DialogContent>
                        <DialogContentText>
                            Please fill the form
                        </DialogContentText>
                        <form>

                        </form>
                    </DialogContent>
                    <DialogActions>
                        <Button color="primary">
                            Create
                        </Button>
                    </DialogActions>
                </Dialog>
            </Fragment>
        )
    }
} 
    