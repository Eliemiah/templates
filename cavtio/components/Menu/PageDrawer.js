import Drawer from '@mui/material/Drawer';
import styles from './Menu.module.scss'


const PageDrawer = props => {

  return (
    <Drawer
      id={styles[props.id]}
      className={props.className}
      role="presentation"
      anchor={props.anchor}
      open={props.drawerState}
      onClose={props.handleDrawerState}>
      <ul className={"w-100 h-100 relative bg-primary"}>
      {
        props.items.map((item, index) => (
          <li key={index} className="my-2"
          onClick={() => props.handleDrawerState(false)}>
            <a href={item.route} className={"w-100 text-white"}>{item.title}</a>
          </li>
        ))
      }
      </ul>
    </Drawer>
  );
}

export default PageDrawer