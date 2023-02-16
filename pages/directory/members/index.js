import AppHeader from "../../../components/core/header";
import AppSidebar from "../../../components/core/sidebar";


function Members(props) {
    return <>
        <AppHeader activeMenu="Members" />
        <AppSidebar />
        <div className="tcn">
            <h1>Members <span className="tcn__title__count"></span></h1>
            <div className="tcn__list">
                
            </div>
        </div>
        <style jsx>
            {
                `
                .tcn {width: 100vw; height: 100vh; padding: 104px 24px 24px 324px;}
                .tcn__title__count {font-size: 13px; color: grey; font-weight: 400;}
                .tcn__list {display: flex; flex-wrap: wrap; width: 100%; padding: 48px 0;}
                .tcn__list__item {margin-right: 16px; margin-bottom: 16px;}
                `
            }
        </style>
    </>
}

export default Members;