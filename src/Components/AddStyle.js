import {makeStyles} from '@material-ui/core'

const Styles =makeStyles({
    formcard:{
        margin:'2vh',
        color:'#fff',
        padding:'2vh',
        display:'flex',
        alignItems:'center',
        justifyContent:'space-between',
        '@media(max-Width:1024px)':{
            flexDirection:'column',            
       },
    },
    input:{
        '@media(max-Width:1024px)':{
        width:'100%',
        marginBottom:'2vh'
       },
    }
   
})

export default Styles
