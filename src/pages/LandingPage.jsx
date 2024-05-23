import { Button, Card, Drawer, IconButton, List, ListItem, Typography } from '@material-tailwind/react';
import React, { useState } from 'react';
import logo from '../assets/logo.png';
import kpi from '../assets/landingpage.png';
import hust from '../assets/hust.png';
import googlecalendar from '../assets/googlecalendar.png';
import notion from '../assets/notion.png';
import jira from '../assets/jira.png';
import sun from '../assets/sun.png';
import fpt from '../assets/fpt.png';
import { XMarkIcon, Bars3Icon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
 
  const openDrawer = () => setIsDrawerOpen(true);
  const closeDrawer = () => setIsDrawerOpen(false);

  return (
    <div className='w-full'>
      <header className='flex items-center justify-between w-full h-16 px-3 py-3 bg-purple'>
        <img src={logo} className='h-full ml-3' />
        <Typography variant='h5' color='white' className='font-inter'>
          KPI Master
        </Typography>
        <IconButton variant="text" size="lg" onClick={isDrawerOpen ? closeDrawer : openDrawer}>
          <Bars3Icon className="h-8 w-8 stroke-2" color='white'/>
        </IconButton>
        <Drawer 
          open={isDrawerOpen}
          onClose={closeDrawer}
          placement='right'
          className='w-2/3 shadow-md'
        >
          <Card
            color="transparent"
            shadow={false}
            className="w-full px-3 py-2"
          >
            <div className='flex justify-end w-full'>
              <IconButton variant="text" size="lg" onClick={closeDrawer}>
                <XMarkIcon className="h-8 w-8 stroke-2" color='dark-gray'/>
              </IconButton>
            </div>
            <List>
              <ListItem>
                How it works
              </ListItem>
              <ListItem>
                Services
              </ListItem>
              <ListItem>
                Blog
              </ListItem>
              <ListItem>
                About Us
              </ListItem>
              <Button className='w-full bg-purple'>
                Contact Us
              </Button>
            </List>
          </Card>
        </Drawer>
      </header>
      <main className='flex flex-col items-center gap-8 h-[50rem] px-12 py-16 bg-gradient-to-b from-white to-blue'>
        <Typography variant='h3' className='text-textBlue text-left'>
          Make your life easier by actively tracking your plans
        </Typography>
        <Typography variant='h6' className='text-textBlue text-left'>
          Control and analyze your KPI progress in the most efficient way possible
        </Typography>
        <img src={kpi} />
        <Link to='/login'>
          <Button className='h-14 text-lg bg-purple uppercase'>
            Get started
          </Button>
        </Link>
      </main>
      <footer className="flex w-full flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 py-6 text-center md:justify-between bg-darkPurple">
        <Typography color="white" className="font-normal">
          Sync with external systems
        </Typography>
        <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
          <li>
            <img src={hust} className='w-8'/>
          </li>
          <li>
            <img src={sun} className='w-8'/>
          </li>
          <li>
            <img src={fpt} className='w-8'/>
          </li>
          <li>
            <img src={googlecalendar} className='w-8'/>
          </li>
          <li>
            <img src={notion} className='w-8'/>
          </li>
          <li>
            <img src={jira} className='w-8'/>
          </li>
        </ul>
      </footer>
    </div>
  )
}

export default LandingPage