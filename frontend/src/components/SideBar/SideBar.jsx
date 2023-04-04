import { Stack } from '@mui/material'



const SideBar = () => {
    return ( 
       <Stack 
        direction='row'
        sx = {{
            overflowY: 'auto',
            height: {sx: 'auto'},
            flexDirection: {'column'},
        }}/>
     );
}
 
export default SideBar;