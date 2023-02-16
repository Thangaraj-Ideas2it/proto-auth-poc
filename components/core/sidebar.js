import PlTagItem from "../ui/pl-tag-item"
import { filters } from '../../utils/constants'

function AppSidebar(props) {
    return <>
        <div className="aps">
            <div className="aps__head">
                <h3 className="aps__head__title">Filters</h3>
                <p className="aps__head__clear">Clear All</p>
            </div>
            <div className="aps__body">

                {/**** FILTER - TOGGLES ****/}
                <div className="aps__body__toggles">
                    <p className="aps__body__toggles__title">Include Friends of Protocol Labs</p>
                </div>

                {/**** FILTER - TAGS ****/}
                {filters.map(topics => <div className="aps__body__cn">
                    <h3 className="aps__body__cn__title">{topics.title}</h3>
                    <div className="aps__body__cn__tags">
                        {topics.items.map(item => <div className="aps__body__cn__tags__item">
                            <PlTagItem title={item.value} />
                        </div>)}
                    </div>
                </div>)}
            </div>
        </div>
        <style jsx>
            {
                `
                .aps {width: 290px; background: white; height: 100vh; padding-top: 80px; position: fixed; left: 0; top:0; z-index: 9; border-right: 1px solid lightgrey;}
                .aps__head {padding: 24px; border-bottom: 1px solid lightgrey; align-items: center; cursor: pointer; font-size: 14px; display: flex; justify-content: space-between;}
                .aps__head__clear {color: #156ff7; font-size: 12px;}

                .aps__body {padding: 0 24px; overflow-y: scroll; height: calc(100vh - 150px);}
                .aps__body__toggles {padding: 24px 0; display: flex; align-items: center;}
                .aps__body__cn {width: 100%; border-top: 1px solid lightgrey; padding: 24px 0;}
                .aps__body__cn__title {font-size: 14px; text-transform: capitalize; margin-bottom: 24px;}
                .aps__body__cn__tags {width: 100%; display: flex; flex-wrap: wrap;}
                .aps__body__cn__tags__item {margin:0 8px 8px 0;}

                .aps__body__toggles__title {font-size: 13px; color: #475569;}

                `
            }
        </style>
    </>
}

export default AppSidebar