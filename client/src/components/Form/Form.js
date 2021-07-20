import 'date-fns';
import React, { useState } from 'react';
import { Accordion, AccordionDetails, AccordionSummary, TextField, Typography, Button, RadioGroup, FormControlLabel, Radio, Paper, AccordionActions, FormLabel } from '@material-ui/core';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import useStyles from './styles';
import { useDispatch } from 'react-redux';
import { createPost } from '../../actions/posts';



const Form = () => {
    const [postData, setPostData] = useState({ firstName: '', surName: '', email: '', telephoneNumber: '', gender: '', dateOfBirth: '', comments: '' });
    const dispatch = useDispatch();
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    const [selectedDate, setSelectedDate] = React.useState(new Date('2021-07-19T21:11:54'));

    const clear = () => {
        setPostData({ firstName: '', surName: '', email: '', telephoneNumber: '', gender: '', dateOfBirth: '', comments: '' });
    };

    const handleSubmit = async (e) => { 
        e.preventDefault();
        dispatch(createPost(postData));
        setExpanded(false);
        clear();
    };


    return(
        <Paper className={classes.paper}>
        <form onSubmit={handleSubmit}>
            <Accordion  expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary className={classes.accordionSummary}>
                    <Typography className={classes.heading}>Step 1: Your details</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`}>
                        <TextField name="First Name"  variant="outlined" label="First Name" onChange={(e) => setPostData({...postData, firstName: e.target.value})}/>
                        <TextField name="Surname"  variant="outlined" label="Surname" onChange={(e) => setPostData({...postData, surName: e.target.value})} />
                        <TextField name="Email Address"  variant="outlined" label="Email Address" onChange={(e) => setPostData({...postData, email: e.target.value})} />
                    </form>
                </AccordionDetails>
                <AccordionActions>
                    <Button variant="contained" color="primary" size="small" onClick={handleChange('panel1')}>Next</Button>
                </AccordionActions>
            </Accordion>
            <Accordion  expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <AccordionSummary className={classes.accordionSummary}>
                    <Typography className={classes.heading}>Step 2: More comments</Typography>
                </AccordionSummary>
                  <AccordionDetails>
                    <form  className={classes.form}>
                        <TextField name="Telephone number"  variant="outlined" label="Telephone number"  onChange={(e) => setPostData({...postData, telephoneNumber: e.target.value})}/>
                        <div style={{margin:"0 0 0 40px"}}>
                            <FormLabel component="legend">Gender</FormLabel>
                            <RadioGroup onChange={(e) => setPostData({...postData, gender: e.target.value})}>
                                <FormControlLabel value="female" control={<Radio />} label="Female" />
                                <FormControlLabel value="male" control={<Radio />} label="Male" />
                                <FormControlLabel value="other" control={<Radio />} label="Other" />
                            </RadioGroup>
                        </div>
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <KeyboardDatePicker
                                disableToolbar
                                variant="inline"
                                format="MM/dd/yyyy"
                                margin="normal"
                                id="date-picker-inline"
                                label="Date of birth"
                                value={selectedDate}
                                onChange={(value) => setPostData({...postData, dateOfBirth: value})}
                                KeyboardButtonProps={{
                                'aria-label': 'change date',
                                }}
                            />    
                        </MuiPickersUtilsProvider>
                   </form>
                </AccordionDetails>
                <AccordionActions>
                    <Button variant="contained" color="primary" size="small" onClick={handleChange('panel2')}>Next</Button>
                </AccordionActions>
            </Accordion>
            <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                <AccordionSummary className={classes.accordionSummary}>
                    <Typography className={classes.heading}>Step 3: Final comments</Typography>
                </AccordionSummary>
                    <AccordionDetails>
                    <div className={classes.comments}>
                        <form  className={classes.form}>
                            <TextField name="Comments" variant="outlined" label="Comments" fullWidth multiline rows={6} onChange={(e) => setPostData({...postData, comments: e.target.value})} />
                        </form>
                    </div>
                </AccordionDetails>
                <AccordionActions>
                    <Button variant="contained" color="primary" size="small" onClick={handleChange('panel3')}>Next</Button>
                </AccordionActions>
            </Accordion>
                <Button onClick={handleSubmit} className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
            </form>
        </Paper>
    );
}

export default Form;
