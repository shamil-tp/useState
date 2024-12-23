export default Table = (props)=>{
    return <>
        <tr>
            <th scope="row">{props.data.id}</th>
            <td>{props.data.first}</td>
            <td>{props.data.last}</td>
            <td>{props.data.handle}</td>
        </tr>
    </>
}