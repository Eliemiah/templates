import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react'
import { styled } from '@mui/material/styles';
import PageHeader from './PageHeader'
import MuiAppBar from '@mui/material/AppBar';

const PageDrawer = dynamic(() => import ('./PageDrawer'))


const AppBar = styled(MuiAppBar, {shouldForwardProp: (prop) => prop !== 'open',})(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
}));  



const Menu = (props) => {


    const [drawerState, setDrawerState] = useState(false)
    // const [menuHasMounted, setMenuToMounted ] = useState(false)
    const [sectionActive, setSectionToActive] = useState("#inicio")

    const handleDrawerState = (opt) => opt === true ? setDrawerState(true) : setDrawerState(!drawerState);


    // useEffect(() => setMenuToMounted(true), [])


    return(
       <>
          <AppBar className={"bg-primary"} id={"app-bar"}>
            {
              props.mainContentIsLoaded 
              &&  <PageHeader drawerState={drawerState} mobileModeEnabled={props.mobileModeEnabled} logo={props.logo} handleDrawerState={handleDrawerState}
                  items={props.menuItems} sectionActive={sectionActive} setSectionToActive={setSectionToActive}/>
            }

          </AppBar>
        
          {/*
            props.mainContentIsLoaded && (props.mobileModeEnabled && menuHasMounted) 
            && <PageDrawer drawerState={drawerState} handleDrawerState={handleDrawerState} items={props.menuItems}
                sectionActive={sectionActive} setSectionToActive={setSectionToActive} className={"bg-primary h-100 text-white py-0"}/>
          */}
       </>

    )
}

export default Menu
