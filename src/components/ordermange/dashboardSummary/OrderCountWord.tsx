"use client";
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import React from 'react';


export interface WordData {
  text: string;
  value: number;
}


export default function OrderCountWord() {
//   const [data, setData] = useState(undefined as unknown as WordData[]);
//   const [max, setMax] = useState(100);
//   useEffect(() => {
//     const values = props.data.map((r) => {
//       return r.value;
//     });
//     console.log('props.data', props.data);
//     setMax(Math.max(...values));
//     setData(props.data);
//   }, [props.data]);

  // @ts-ignore
  const fontSize = (word) => (100 * word.value) / max;
  // @ts-ignore
  const rotate = () => 0;// word.value % 90;

 
  return (
    // <WordCloud
    //   width={1000}
    //   height={400}
    //   data={data}
    //   fontSize={fontSize}
    //   rotate={rotate}
    //   padding={3}
    //   spiral="rectangular"
    //   random={Math.random}      
    // />
    <Card>
      <CardHeader>
        <CardTitle className='text-2xl font-bold'>Order Count by State</CardTitle>
      </CardHeader>
      <CardContent>
        word
      </CardContent>
    </Card>
  );
}
