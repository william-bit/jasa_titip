import { AxiosResponse } from "axios";
import Card from "../components/custom/Card";

interface IListView {
  data: AxiosResponse<any, any> | undefined;
  isLoading: boolean;
  isError: boolean;
  isFetching: boolean;
  error: Error | unknown;
  toCheckout?: boolean;
}

const ListView = (props: IListView) => {
  console.log("test");

  return (
    <div className="grid grid-cols-3 gap-1 p-3 mt-1">
      {props.data?.data.resource.data.map((row: any, index: number) => (
        <Card
          toCheckout={props.toCheckout}
          id={row.id}
          src={row.photo}
          title={row.name}
          price={row.price}
          description={row.location}
          detail={row.description}
        ></Card>
      ))}
      {props.isLoading && <div>Loading</div>}
      {!props.data?.data.resource.data.length && !props.isLoading && (
        <div>Empty Data</div>
      )}
    </div>
  );
};

export default ListView;
