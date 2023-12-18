import { useFetcher } from 'react-router-dom';
import Button from '../../ui/Button';
import { updateOrder as  updateOrderApi} from '../../services/apiRestaurant';

function UpdateOrder() {
  const fetcher = useFetcher();

  return (
    <fetcher.Form method='PATCH' className='text-right'>
      <Button type="primary">قرار دادن در اولویت </Button>;
    </fetcher.Form>
  );
}

export default UpdateOrder;

export async function action({request ,params}) {
    const data = {priority :true};
    await updateOrderApi(params.orderId,data) 
    return null;
}