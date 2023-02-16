import Menu from "./menu";

function AppHeader(props) {
    return <>
        <div className="nh">
            <img className="nh__logo" src="/images/protocol_logo.png"/>
            <div className="nh__menu">
                <Menu active={props.activeMenu}/>
            </div>
            <div className="nh__lg"></div>
        </div>
        <style jsx>
            {
            `
            .nh {width: 100vw; background: rgba(255,255,255, 0.95); height: 80px; z-index: 10; padding: 0 48px; display: flex; align-items: center; position: fixed; top:0; right:0; left:0; box-shadow: rgb(0,0,0,0) 0px 0px 0px 0px, rgb(0,0,0,0) 0px 0px 0px 0px,rgb(226,232,240) 0px 1px 4px 0px;}
            .nh__logo {width: 200px;  }
            .nh__menu {flex: 1; padding-left: 24px;};
            .nh__lg {width: 100px;}
            `
            }
        </style>
    </>
}

export default AppHeader;