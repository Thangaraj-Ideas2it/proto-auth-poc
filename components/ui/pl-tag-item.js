function PlTagItem (props) {
    const title = props.title;
    return <>
      <div className="pt">
            {title}
      </div>
      <style jsx>
        {
         `
         .pt {padding: 6px 12px; border: 1px solid lightgrey; font-size: 12px; font-weight: 500; width: fit-content; border-radius: 30px}
         
         `

        }
      </style>
    </>
}

export default PlTagItem