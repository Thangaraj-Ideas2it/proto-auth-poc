function PlTeamCard(props) {
    const title = props.title ?? '';
    const desc = props.desc ?? '';
    const imgSrc = props.imgSrc;
    const tags = props.tags ?? [];
    const fitTags = tags.filter(tag => tag.length <= 13);
    const unFitTags = tags.filter(tag => tag.length > 13)
    return <>
        <div className="tc">
            <div className="tc__head">
            </div>
            <div className="tc__body">
                <h3 className="tc__body__title">{title}</h3>
                <p className="tc__body__desc">{desc}</p>
            </div>
            <div className="tc__tags">
               {tags.length === 1 && tags.map(tag => <p className="tc__tags__item">{tag}</p>)}
               {tags.length > 1 && fitTags.map(tag => <p className="tc__tags__item">{tag}</p>)}
               {(tags.length > 1 && unFitTags.length > 0 ) && <p className="tc__tags__item">{`${unFitTags.length}+`}</p>}
            </div>
            <div className="tc__logo">
                <img src={imgSrc} className="tc__logo__img"/>
            </div>


        </div>

        <style jsx>
            {
                `
            .tc {width: 275px; cursor: pointer; position: relative; display: flex; flex-direction: column; height: 275px; background: white; border: 1px solid lightgrey; border-radius: 10px;}
            .tc__head {width: 100%; height: 64px; background: #f8f9fb; border-bottom: 1px solid lightgrey; border-top-left-radius: 10px; border-top-right-radius: 10px;}
            .tc__body {display: flex; padding: 16px; flex: 1; flex-direction: column; justify-content: center; align-items: center;}
            .tc__body__title {margin-top: 30px;}
            .tc__logo {position: absolute; display: flex; align-items: center; justify-content: center; top: 20px; left: 102px; border-radius: 10px; width: 70px; height: 70px; border: 1px solid lightgrey; background: white;}
            .tc__logo__img {width: 68px; height: 68px; object-fit: contain;}
            .tc__body__desc {font-size: 13px; object-fit: contain; line-height: 17px; text-align: center; color: grey; margin-top: 16px;}
            .tc__tags {display: flex; padding: 10px 24px; border-top: 1px solid lightgrey; height: 50px;}
            .tc__tags__item {font-size: 12px; border-radius: 30px; background: #f1f5f9; width:fit-content; padding: 6px 12px; margin-right: 10px;}
            `
            }
        </style>
    </>
}

export default PlTeamCard