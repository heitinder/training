import { useParams } from "react-router-dom";
import useFetchData from "../../../../hooks/useFetchData";

const SingleUser = (props) => {
  const { id } = useParams();
  const urlForApi = `https://reqres.in/api/users/${id}`;
  const {response } = useFetchData(urlForApi);
  console.log(response);
  return (
    <div>
      <p>id : {response?.data?.id}</p>
      <p>First Name : {response?.data.first_name}</p>
      <p>Last Name : {response?.data.last_name}</p>
      <p>Email : {response?.data.email}</p>
    </div>
  );
};

export default SingleUser;
