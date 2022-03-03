import ListItemText from '@mui/material/ListItemText'


const ItemTitle = props => {

    return (
        <ListItemText>
        {props.sectionActive === props.index ? <strong>{props.itemText}</strong> : props.itemText}
        </ListItemText>
    )
}

export default ItemTitle