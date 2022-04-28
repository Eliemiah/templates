import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import styles from './Menu.module.scss'
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



const Menu = props => {


    const [drawerState, setDrawerState] = useState(false)
    const [menuHasMounted, setMenuToMounted ] = useState(false)
    const handleDrawerState = (opt) => opt === true ? setDrawerState(true) : setDrawerState(!drawerState);


    useEffect(()  => setMenuToMounted(true), [])


    return(
       <>
          <AppBar className={`${styles["hidemenu"]} ${(props.heroInview === true && drawerState === false) ? styles["bg-translucid"] : "bg-primary"}`} id={styles["app-bar"]}>
          {
            props.mainContentIsLoaded 
            &&  <PageHeader drawerState={drawerState} mobileModeEnabled={props.mobileModeEnabled} logo={props.logo} handleDrawerState={handleDrawerState}
                items={props.menuItems} />
          }
          </AppBar>
          {
            props.mainContentIsLoaded && (props.mobileModeEnabled && menuHasMounted) 
            && <PageDrawer drawerState={drawerState} handleDrawerState={handleDrawerState} 
                  id="page-drawer"items={props.menuItems} anchor={"top"} heroInView={props.heroInView}
                  className={`h-100 text-white py-0`}/>
          }
       </>

    )
}

export default Menu
