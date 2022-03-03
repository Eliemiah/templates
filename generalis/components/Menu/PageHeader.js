import Image from 'next/image'
import Toolbar from '@mui/material/Toolbar';
import ItemTitle from './ItemTitle';
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';



const PageHeader = props => {

  
  return(
       <Toolbar className="nav-toolbar">
        {
          props.mobileModeEnabled === true 
          ?
            <div className="h-100 w-100 d-flex align-items-center">
              <div className="navbar-logo relative text-center d-flex justify-content-start align-items-center py-3">
                <div className="logo-outer ms-1">
                  <Image src={props.logo.pic} quality={95} alt={props.logo.alt}
                    width={600} height={80} priority
                    sizes="(max-width: 575px) 50vw, (min-width: 576px) 60vw, 70vw"
                  />  
                </div>
              </div>
              <div className="w-25  d-flex justify-content-end pe-1 menu-btn"> 
                <IconButton onClick={() => props.handleDrawerState()} className="text-white ">{props.drawerState === true ? <CloseIcon /> : <MenuIcon />} </IconButton>
              </div>
            </div>
          :
          <>
            <div className="navbar-logo relative text-center d-flex justify-content-center align-items-end pb-1">
              <div className="logo-outer">
                <Image src={props.logo.pic} layout="responsive" quality={95}  alt={props.logo.alt}
                  width={600} height={80} priority
                  sizes="(min-width: 768px) 70vw, (min-width: 992px) 80vw, 85vw"
                />
              </div>
            </div>
            <ul id="nav-desktop" className="w-75 pr-5 h-100 pb-2 my-0 d-flex text-center justify-content-end align-items-end pe-3">
            {
              props.items.map((item, index ) => {

                return (
                  <li key={props.items.length + index}  className="ms-4 text-center d-flex justify-content-center align-items-center" 
                      onClick={() => props.setSectionToActive(item.route)}>
                    <a className="text-white nav-a" href={item.route}>
                      <ItemTitle index={item.route} sectionActive={props.sectionActive} itemText={item.title}/>
                    </a>
                  </li>)})
            }
            </ul>
          </>
        }
      </Toolbar>
  )
}

export default PageHeader


/*

            <div className="container">
              <div className="row d-flex flex-row ">
                <div className="col-md-6 d-flex text-left w-25 align-items-center px-0">
                  <IconButton onClick={() => props.handleDrawerState()} className={"text-white"}>{props.drawerState === true ? <CloseIcon /> : <MenuIcon />} </IconButton>
                </div>
                <div className="col-md-6 w-50 d-flex  justify-content-center">
                  <Image src={props.logo.pic} width={40} height={40} priority alt={props.logo.alt} width={200} height={64} quality={95}
                  sizes="(min-width: 320px) 10vw, (min-width: 768px) 15vw, 80vw"
                  />                  
                </div>
              </div>
            </div>


*/