import React, { useEffect, useState } from "react";
import useStyles from "./profileStyles";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import CardMedia from '@material-ui/core/CardMedia';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import skill2 from "../../img/skill2.png"
import skill1 from "../../img/skill1.png"
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import AppBar from '@material-ui/core/AppBar';
import PropTypes from 'prop-types';
import { TextField, Button } from "@material-ui/core";
import TextareaAutosize from '@material-ui/core/TextareaAutosize';

const job = {
  id: 1,
  title: "IT",
  description: "here is all the new technologies  It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters",
}

const Profile = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`scrollable-force-tabpanel-${index}`}
        aria-labelledby={`scrollable-force-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`scrollable-force-tabpanel-${index}`}
        aria-labelledby={`scrollable-force-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };

  function a11yProps(index) {
    return {
      id: `scrollable-force-tab-${index}`,
      'aria-controls': `scrollable-force-tabpanel-${index}`,
    };
  }

  return (
    <div>
      <Header />
      <div>
        <Typography>
          <Card className={classes.card1} >
            <div className={classes.topCard}>
              <CardMedia
                className={classes.media}
                image={skill2}
                title=""
              />
              <div className={classes.phone}>
                <h1>Basma Tareq</h1>
                <div>
                  <PhoneIcon /> +97000000000
                </div>
                <div>
                  <EmailIcon /> Basma_Tareq@gmail.com
                </div>
              </div>
            </div>
          </Card>
        </Typography>

        <AppBar position="static" color="default" className={classes.app}>
          <Tabs className={classes.tt}
            value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons="on"
            indicatorColor="primary"
            textColor="primary"
            aria-label="scrollable force tabs example"
          >
            <Tab label="Posts"  {...a11yProps(0)} />
            <Tab label="Reviews"  {...a11yProps(2)} />
          </Tabs>
        </AppBar>

        <TabPanel value={value} index={0} >
          <div className={classes.root}>
            <Card className={classes.card}>
              <div className={classes.leftColumn}>
                <div>
                  <CardMedia
                    className={classes.media3}
                    image={skill1}
                    title=""
                  />
                </div>
                <div>
                  <CardContent>
                    <Typography className={classes.title} gutterBottom>
                      {job.title}
                    </Typography>
                    <Typography className={classes.date} color="textSecondary">
                      {job.createdDate}
                    </Typography>
                    <Typography variant="body2" component="p" className={classes.description}>
                      {job.description}
                    </Typography>
                  </CardContent>
                </div>
              </div>
            </Card>
          </div>
        </TabPanel>

        <TabPanel value={value} index={1}>
          <div className={classes.root}>
            <div className={classes.txt}>Add a Reviews</div>
            <Card className={classes.card}>
              <div className={classes.leftColumn}>
                <div>
                  <CardContent>
                    <TextareaAutosize
                      className={classes.inputFieldTextarea}
                      id="outlined-basic"
                      variant="outlined"
                      rowsMax={5}
                      rowsMin={5}
                      aria-label="maximum height"
                      placeholder="Your Post..."
                      name="your_post"
                      onChange={handleChange}
                    />
                    <Button className={classes.btn} color="primary" orientation="vertical" aria-label="vertical contained primary button group" variant="contained" >Add</Button>
                  </CardContent>
                </div>
              </div>
            </Card>
          </div>
        </TabPanel>
      </div>
      <Footer />
    </div>
  );
}

export default Profile;