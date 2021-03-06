import nc from 'next-connect';
import Order from '../../../models/Order';
import { isAuth, isAdmin } from '../../../utilities/auth';
import db from '../../../utilities/db';
import { onError } from '../../../utilities/error';

const handler = nc({
  onError,
});
handler.use(isAuth, isAdmin);

handler.get(async (req, res) => {
  await db.connect();
  const orders = await Order.find({}).populate('user', 'name');
  await db.disconnect();
  res.send(orders);
});

export default handler;
