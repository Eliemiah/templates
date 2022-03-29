import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react'
import PageHeader from './PageHeader'

const PageDrawer = dynamic(() => import ('./PageDrawer'))


const Menu = ({menuItems, widthMatch}) => {

    const [drawerState, setDrawerState] = useState(false)
    const [drawerReleased, setDrawerToReleased] = useState(false) 
    const [menuHasMounted, setMenuToMounted] = useState(false)
    const [sectionActive, setSectionToActive] = useState("#inicio")

    const handleDrawerState = (opt) => opt === true ? setDrawerState(true) : setDrawerState(!drawerState);

    useEffect(() => setMenuToMounted(true),[])

    useEffect(() => widthMatch && menuHasMounted ? setDrawerToReleased(true) : '' , [widthMatch, menuHasMounted])


    return(
       <>
        <PageHeader drawerState={drawerState} mobileModeEnabled={widthMatch} handleDrawerState={handleDrawerState}
         items={menuItems} sectionActive={sectionActive} className={"bg-primary"} setSectionToActive={setSectionToActive}/>
        {
            drawerReleased === true
            ? 
                <PageDrawer drawerState={drawerState} handleDrawerState={handleDrawerState} items={menuItems}
                 sectionActive={sectionActive} setSectionToActive={setSectionToActive} className={"bg-primary h-100 text-white py-0"}/> 
            : 
                ''
        }
       </>

    )
}

export default Nav
