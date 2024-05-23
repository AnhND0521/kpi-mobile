import { Card, List, ListItem } from '@material-tailwind/react'
import React from 'react'

const AddKPIPopover = () => {
  return (
    <Card className='w-64 h-36'>
      <List>
        <ListItem>
          Add new KPI
        </ListItem>
        <ListItem>
          Import from external system
        </ListItem>
      </List>
    </Card>
  )
}

export default AddKPIPopover