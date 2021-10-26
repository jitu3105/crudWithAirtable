import React, { useState, useEffect } from 'react'
import { Card, TextField, Button, unstable_createMuiStrictModeTheme } from '@material-ui/core'
import Styles from './AddStyle'
import base from '../api/Base'
import { v4 as uuid } from 'uuid'


const Add = ({ setListData, setEdit, edit, listdata }) => {
    const [namee, setName] = useState('')
    const [desc, setDesc] = useState('')
    const [size, setSize] = useState('')
    const handleNumChange = (e) => {
        if (e.target.value > 0) {
            setSize(e.target.value)
        }
    }
    useEffect(() => {
        if (edit) {
            setName(edit.fields.name)
            setDesc(edit.fields.discription)
            setSize(edit.fields.size)
        }
    }, [edit])
    const classes = Styles();



    const processForm = (e) => {
        e.preventDefault();
        var newItem = { id: uuid(), 'name': namee, 'discription': desc, 'size': size };
        // newItem={id:edit.id,fields:newItem}
        setName('');
        setSize('')
        setDesc('')
        base('property').create([
            {
                "fields": newItem
            }
        ], function(err, records) {
            if (err) {
                console.error(err);
                return;
            }
            records.forEach(function (record) {
                localStorage.setItem('list', JSON.stringify([...listdata, record._rawJson]));
              console.log(record);
            });
          });
    }

    const processEdit = (e) => {
        e.preventDefault();
        var newItem = { id: uuid(), name: namee, discription: desc, size: size };
        newItem={id:edit.id,fields:newItem}
        var newdata = listdata.filter(word => word.id != edit.id);
        var newdata=[...newdata,newItem]
        localStorage.setItem('list', JSON.stringify(newdata));
        setEdit(false);
        setName('');
        setSize('');
        setDesc('');
    
base('property').update([
    newItem
  ], function(err, records) {
    if (err) {
      console.error(err);
      return;
    }
    records.forEach(function(record) {
      console.log(record.get('id'));
    });
  });
  
    }
    return (
        <form onSubmit={edit ? processEdit : processForm}>
            <h1>{edit ? 'Edit' : 'Add'}</h1>

            <Card className={classes.formcard}>
                <TextField variant='filled' className={classes.input} required value={namee} onChange={(e) => { setName(e.target.value) }} label='Name' />
                <TextField variant='filled' className={classes.input} required value={desc} onChange={(e) => { setDesc(e.target.value) }} label='Description' multiline='true' maxRows='2' />
                <TextField variant='filled' className={classes.input} required value={size} onChange={handleNumChange} label='size' min='0' type='Number' />
                <Button className={classes.input} variant='contained' type='submit' color='primary'>{edit ? 'Edit' : 'Add'}</Button>
                {edit && <Button className={classes.input} variant='contained' onClick={() => setEdit(false)} type='button' color='primary'>Cancel</Button>}
            </Card>
        </form>
    )
}

export default Add