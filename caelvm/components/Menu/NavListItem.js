import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'


const NavListItem = props => {


    return(
        <ListItem className={props.listItemClassName} key={props.key} button>
            <ListItemText>
                <a href={props.route} className={`nav-a w-100 ${props.sectionActive === index ?  "section-active" : ''}`}>
                    <ListItemText>{item.title}</ListItemText>
                </a>
                {props.title}
            </ListItemText>
        </ListItem>
    )
}


export default NavListItem