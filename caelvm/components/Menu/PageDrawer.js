import { styled} from '@mui/material/styles';
import MuiList from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import ItemTitle from './ItemTitle'

const drawerWidth = 240;

const defaultDrawerOpenedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});
const defaultDrawerClosedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(9)} + 1px)`,
  },
});

const CustomList = styled(MuiList)(props => {

  return `
    @media(min-width: 0px) and (max-width: 473px){
      top: 57px;
    }
    @media(min-width: 474px) and (max-width: 599px){
      top: 49px
    }
    @media(min-width: 600px){
      top: 65px
    }
  `
})


const PageDrawer = props => {

    const { window } = props;

    const container = window !== undefined ? () => window().document.body : undefined;

    const itemsList = (
        <CustomList id="main-menu-list" className={props.className}>
        {
          props.items.map((item, index) => (
            <ListItem key={index} button onClick={() => {
              props.handleDrawerState(false)
              props.setSectionToActive(item.route)
            }}>
              <a href={item.route} className={"nav-a w-100"}>
                <ItemTitle sectionActive={props.sectionActive} index={item.route} itemText={item.title}/>
              </a>
            </ListItem>
          ))
        }
      </CustomList>
    )


    return(
        <SwipeableDrawer
        container={container}
        variant="temporary"
        open={props.drawerState}
        onClose={props.handleDrawerState}
        onOpen={() => props.handleDrawerState(true)}
        ModalProps={{
            keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
        }}>
          {itemsList}
        </SwipeableDrawer>
    )

}

export default PageDrawer
