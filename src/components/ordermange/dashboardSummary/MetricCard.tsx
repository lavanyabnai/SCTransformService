import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';


const stats = [
    { name: 'Order Total', stat: '4,82B' },
    { name: 'Order Sub Total', stat: '2.04B' },
    { name: 'Ord Line Total', stat: '1.91B' },
    { name: 'Ord Ln Sub Total', stat: '2.57B' },
    { name: 'Order Line Qty', stat: '125M' },
    { name: 'Order Line Count', stat: '12.8M' },
  ]
  
export default function MetricCard() {
  return (
    <Card>
        <CardHeader>
            <CardTitle className='text-2xl font-bold'>Metric Card</CardTitle>
        </CardHeader>
        <CardContent>

        <dl className="grid grid-cols-1 gap-6  lg:grid-cols-2">
      {stats.map((item) => (
        <div
          key={item.name}
          className="items-center overflow-hidden rounded-lg border border-gray-200 bg-white px-4 py-5 shadow sm:p-6"
        >
             <dd className="mt-1 text-center text-4xl font-bold tracking-tight  text-gray-900  lg:text-5xl">
            {item.stat}
          </dd>
          <dt className="truncate text-center text-lg font-medium text-gray-500">
            {item.name}
          </dt>
         
        </div>
      ))}
    </dl>
        </CardContent>
    </Card>
  );
}
