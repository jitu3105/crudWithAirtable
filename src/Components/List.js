import { Card, Paper, Typography, TextField, Button } from '@material-ui/core'
import React, { useState, useEffect } from 'react'
import Add from './Add';
import Styles from './listStyle'
import base from '../api/Base'

const List = () => {
    const [test, setTest] = useState([]);
    const [edit, setEdit] = useState(false)
    const data=localStorage.getItem('list');
    const classes = Styles();
    const [listdata, setListData] = useState([]);
    useEffect(() => {
        base('property').select().eachPage((records, fetchNextPage) => {
            setTest(records)
            fetchNextPage();
        }
        )

    })

    useEffect(()=>{
        if(test){
            setListData(test.map(item=>item._rawJson))
        }
    },[test])
    
    useEffect(() => {
        localStorage.setItem('list',JSON.stringify(listdata));
    }, [listdata])




    const deleteHandler = (id) => {
       

        base('property').destroy([id], function (err, deletedRecords) {
            if (err) {
                console.error(err);
                return;
            }
            console.log('Deleted', deletedRecords.length, 'records');
        });
    }





    const toddleEdit = (id) => {
        setEdit(listdata.filter(word => word.id == id) && listdata.filter(word => word.id == id)[0]);
    }
    return (
        <div className={classes.cardCont}>

            <Paper elevation={2} className={classes.ppr} >
                <Add edit={edit} setEdit={setEdit} setListData={setListData} listdata={listdata} />
                {/* </Paper>
            <Paper elevation={2} className={classes.ppr} > */}
                <div className={classes.list}>
                    {listdata.length ?

                        listdata.map((dta, index) =>
                            <Card key={index} className={classes.card}>
                                <div className={classes.cardItems}>
                                    <Typography variant='h4'>
                                        {dta.fields.name}
                                    </Typography>
                                    <Typography variant='h6'>
                                        {dta.fields.discription}
                                    </Typography>
                                    <Typography variant='h6'>
                                        {dta.fields.size}
                                    </Typography>
                                </div>

                                <Button className={classes.edit} onClick={() => { toddleEdit(dta.id) }}>Edit</Button>
                                <Button className={classes.delete} onClick={() => { deleteHandler(dta.id) }}>Delete</Button>
                            </Card>

                        )
                        :
                        <Card className={classes.card}>
                            <h3>no data yet </h3>

                        </Card>
                    }


                </div>

            </Paper>
        </div>
    )
}

export default List
