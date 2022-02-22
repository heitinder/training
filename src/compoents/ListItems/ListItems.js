const ListItem = (props) => {
    const handleDelete = (index) => {
            this.props.students = props.studens.splice(index,1);
    }
  return (
    <ul>
      {props.students.map((student, index) => (
        <li key={index}>
          {student} - <button onClick={() => handleDelete(index)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

// function ListItem(props){
//     return <p>{props.students[0]}</p>
// }
export default ListItem;
