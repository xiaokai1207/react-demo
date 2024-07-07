interface VerticalCellProp { 
  values: value[];
  imgIndex?: number;
}

type value = string | null | undefined | number;

function verticalCell(props: VerticalCellProp) { 
  const { values, imgIndex } = props;
  return <>
    {
      values.map((val, index) => { 
        if (imgIndex === index) {
          return (<img key={index} src={val as string} className="w-10" alt="" />)
        }
        return (<div key={index}>{ val === 0 ? 0 : val || ''}</div>)
      })
    }
  </>
}

export default verticalCell;