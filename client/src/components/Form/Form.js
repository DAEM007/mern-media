import { useState } from 'react';
import FileBase64 from 'react-file-base64';
import { Button, Paper, TextField, Typography } from '@material-ui/core';
import useStyles from './styles';

const Form = () => {
    const [postData, setPostData] = useState({
        creator: '',
        title: '',
        message: '',
        tags: '',
        selectedFile: ''
    });
    const classes = useStyles();

    const handleSubmit = () => {

    };

    const clear = () => {
        
    };

    return (
        <Paper className={classes.paper}>
            <form 
                autoComplete='off'
                noValidate
                className={`${classes.root} ${classes.form}`}
                onSubmit={handleSubmit}
            >
                <Typography variant='h6'>Create a memory</Typography>
                <TextField
                    name='creator'
                    variant='outlined'
                    label='Creator'
                    fullWidth
                    value={postData.creator}
                    onChange={(e) => setPostData({ ...postData, creator: e.target.value })}
                />
                <TextField
                    name='title'
                    variant='outlined'
                    label='Title'
                    fullWidth
                    value={postData.title}
                    onChange={(e) => setPostData({ ...postData, title: e.target.value })}
                />
                <TextField
                    name='message'
                    variant='outlined'
                    label='Message'
                    fullWidth
                    value={postData.message}
                    onChange={(e) => setPostData({ ...postData, message: e.target.value })}
                />
                <TextField
                    name='tags'
                    variant='outlined'
                    label='Tags'
                    fullWidth
                    value={postData.tags}
                    onChange={(e) => setPostData({ ...postData, tags: e.target.value })}
                />
                <div className={ classes.fileInput }>
                    <FileBase64
                        type='file'
                        multiple={false}
                        onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })}
                    />
                </div>
                <Button 
                    type='submit' 
                    className={classes.buttonSubmit} 
                    variant='contained' 
                    color='primary' 
                    size='large' 
                    fullWidth
                >
                    Submit
                </Button>
                <Button 
                    onClick={clear}
                    variant='contained' 
                    color='secondary' 
                    size='small' 
                    fullWidth
                >
                    Clear
                </Button>
            </form>
        </Paper>
    );
}
 
export default Form;