import React from 'react';

const OrdersPage = () => {
  // Placeholder orders data
  const orders = [
    { id: 'ORD123', date: '2025-08-20', status: 'Delivered', total: '₹499' },
    { id: 'ORD124', date: '2025-08-22', status: 'Processing', total: '₹299' },
    { id: 'ORD125', date: '2025-08-25', status: 'Cancelled', total: '₹0' },
  ];

  return (
    <div className="min-h-screen flex flex-col  py-8 px-2 sm:px-4 bg-gradient-to-br from-blue-50 to-blue-200">
      <div className="w-full max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-6 sm:p-8">
        <h1 className="text-3xl font-extrabold mb-6 text-blue-900 drop-shadow text-center">My Orders</h1>
        <h1 className="text-3xl font-extrabold mb-6 text-blue-900 drop-shadow text-center">Get your NFC band now!</h1>
        <table className="w-full text-left border-separate border-spacing-y-2">
          <thead>
            <tr className="bg-blue-100">
              <th className="px-4 py-2 rounded-l-lg">Order ID</th>
              <th className="px-4 py-2">Date</th>
              <th className="px-4 py-2">Status</th>
              <th className="px-4 py-2 rounded-r-lg">Total</th>
            </tr>
          </thead>
          <tbody>
            {orders.map(order => (
              <tr key={order.id} className="bg-blue-50 hover:bg-blue-200 transition">
                <td className="px-4 py-2 font-semibold">{order.id}</td>
                <td className="px-4 py-2">{order.date}</td>
                <td className={`px-4 py-2 font-bold ${order.status === 'Delivered' ? 'text-green-600' : order.status === 'Processing' ? 'text-yellow-600' : 'text-red-500'}`}>{order.status}</td>
                <td className="px-4 py-2">{order.total}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="mt-8 text-center text-gray-500">
          <p>For order issues, <a href="/contact" className="text-blue-600 hover:underline">contact support</a>.</p>
        </div>
      </div>
    </div>
  );
};

export default OrdersPage;