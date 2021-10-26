import {makeStyles} from '@material-ui/core'

const Styles =makeStyles({
    cardCont:{
        width:'100%',
        heught:'90vh',
        display:'flex',
        flexDirection:'column',
        alignItems:'center',

    },
    ppr:{
        width:'95%',
        display:'flex',
        position:'fixed',
        top:'55%',
        left:'50%',
        transform:'translate(-50%,-50%)',
        flexDirection:'column',
        paddingBottom:'2vh',
        height:'85vh',
        overflowY:'auto',
    },
    card:{
        margin:'2vh',
        color:'#fff',
        padding:'2vh',
        background:'#3f51b5',
        minWidth: '0',
        display:'flex',
        minHeight: 'content-fit',
        alignItems:'center',
    },
    cardItems:{
        display:'flex',
        flexDirection:'column'
    },
    list:{
        
        display:'flex',
        flexDirection:'column-reverse'
    },
    input:{
        color:'#fff'
    },
    edit:{
        height:'3vh',
        marginLeft:'auto',
        padding:'2vh',
        background:'#fff',
    },
    delete:{
        height:'3vh',
        padding:'2vh',
        marginLeft:'3vh',
        background:'red',
    }
})

export default Styles