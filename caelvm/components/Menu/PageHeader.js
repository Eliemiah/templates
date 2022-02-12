import Image from 'next/image'
import Toolbar from '@mui/material/Toolbar';
import ItemTitle from './ItemTitle';
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';



const PageHeader = props => {

  
  return(
       <Toolbar>
        {
          props.mobileModeEnabled === true 
          ?
            <div className="container">
              <div className="row d-flex flex-row">
                <div className="col-md-6 d-flex text-left w-25 align-items-center px-0">
                  <IconButton onClick={() => props.handleDrawerState()} className={"text-white"}>{props.drawerState === true ? <CloseIcon /> : <MenuIcon />} </IconButton>
                </div>
                <div className="col-md-6 w-50 d-flex  justify-content-center">
                  <Image src="/static/images/navbar-logo/navbar-logo.png" width={40} height={40} priority alt="Caelvm logo"/>
                </div>
              </div>
            </div>
          :
            <ul id="nav-desktop" className="w-100 px-0 my-0 d-flex text-center justify-content-center">
            {
              props.items.map((item, index ) => {

                return (
                  index === ((props.items.length / 2) - 1) 
                  ? 
                    (<>
                      <li key={props.items.length} className="mx-3 text-center d-flex justify-content-center align-items-center" 
                        onClick={() => props.setSectionToActive(item.route) }>
                        <a className="text-white nav-a" href={item.route}>
                          <ItemTitle index={item.route} sectionActive={props.sectionActive} itemText={item.title} />
                        </a>
                      </li>
                      <li key={(props.items.length + 1)} className="mx-3 text-center d-flex justify-content-center align-items-center" >
                        <Image src="/static/images/navbar-logo/navbar-logo.png"  width={40} height={40} priority alt="Caelvm logo" />
                      </li>
                    </>)
                  :
                    (<li key={props.items.length + index}  className="mx-3 text-center d-flex justify-content-center align-items-center" 
                      onClick={() => props.setSectionToActive(item.route)}>
                      <a className="text-white nav-a" href={item.route}>
                        <ItemTitle index={item.route} sectionActive={props.sectionActive} itemText={item.title}/>
                      </a>
                    </li>)
                )
              })
            }
            </ul>
        }
      </Toolbar>
  )
}

export default PageHeader