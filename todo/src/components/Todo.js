import { db } from '../firebase';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import React from 'react';
import { List, ListItem, ListItemAvatar, ListItemText } from '@mui/material';

const Todo = ({ arr }) => {
  return (
    <List className="todo__list">
      <ListItem>
        <ListItemAvatar />
        <ListItemText primary={arr.item.todo} secondary={arr.item.todo} />
      </ListItem>
      <DeleteForeverIcon
        onClick={() => {
          db.collection('todos').doc(arr.id).delete();
        }}
      />
    </List>
  );
};
export default Todo;
