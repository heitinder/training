import useFetchData from "../../hooks/useFetchData";

const Heading = () => {
  const { data } = useFetchData("https://reqres.in/api/users");
  console.log(data);
  return (
    <div>
      <ul>
        {data?.data?.map((item,index)=><li key={index}>{item.first_name}</li>)}
      </ul>
    </div>
  );
};

export default Heading;
