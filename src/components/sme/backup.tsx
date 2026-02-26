// {/* <div className="w-full max-w-5xl mx-auto p-4 shadow-lg text-blue-900 bg-slate-50">
// <div className="flex items-center justify-between mb-4 ">
  
//   <div className="flex items-center gap-2 text-2xl">
//   <IoIosAlert className="text-4xl"/>
//     <h2 className="text-2xl font-bold">Alerts</h2>
//   </div>
  
//   <div className="flex items-center gap-2">
//   <Badge variant="outline" className="bg-sky-300 text-white font-medium w-24 text-center">
//       Total 52
//     </Badge>
//     <Badge variant="outline" className="bg-red-100 border-red-200 text-red-700 font-medium">
//     14
//     </Badge>
//     <Badge variant="outline" className="bg-orange-100 border-orange-200 text-orange-700 font-medium">
//      23
//     </Badge>
//     <Badge variant="outline" className="bg-yellow-100 border-yellow-200 text-yellow-700 font-medium">
//       9
//     </Badge>
//     <div className="w-px h-6 bg-gray-200 mx-1"></div>
//     <button className="p-1.5 rounded-md hover:bg-gray-100">
//       <Filter className="h-4 w-4 text-gray-500" />
//     </button>
//   </div>
// </div>
// <div className="border-b " />
// <div className="space-y-4 "/>

// <div className="flex flex-wrap gap-4 space-y-4 ">
//   {/* Projected STOCKOUT */}
//   <Card className="border shadow-sm">
//     <CardHeader className="pb-2">
//       <CardTitle className="text-sm font-medium text-gray-500">
//         INVENTORY
//       </CardTitle>
//       <div className="flex gap-1">
//       <span className="h-6 w-6 rounded-full bg-red-500 text-white text-center">7</span>
//           <span className="h-6 w-6 rounded-full bg-yellow-500 text-white text-center">15</span>
//           <span className="h-6 w-6 rounded-full bg-orange-500 text-white text-center">10</span>
//         </div>
      
//     </CardHeader>
//     <CardContent className="pt-0">
//     <TableBody>
//                 {invoices.map((invoice) => (
//                   <TableRow>
//                     <TableCell className="">
//                       {invoice.shipment}
//                     </TableCell>
//                     <TableCell className="text-center">
//                       {invoice.track}
//                     </TableCell>
//                   </TableRow>
//                 ))}
//               </TableBody>
     
//     </CardContent>
//   </Card>

//   {/* Projected MIN INV VIOLATION */}
//   <Card className="border shadow-sm">
//     <CardHeader className="pb-2">
//       <CardTitle className="text-sm font-medium text-gray-500">
//       LOGISTICS
//       </CardTitle>
//       <div className="flex gap-1">
//       <span className="h-6 w-6 rounded-full bg-red-500 text-white text-center">6</span>
//           <span className="h-6 w-6 rounded-full bg-yellow-500 text-white text-center">5</span>
//           <span className="h-6 w-6 rounded-full bg-orange-500 text-white text-center">4</span>
//         </div>
//     </CardHeader>
//     <CardContent className="pt-0">
//     <TableBody>
//               {logistics.map((logistics) => (
//                 <TableRow>
//                   <TableCell className="font-medium">
//                     {logistics.name}
//                   </TableCell>
//                   <TableCell className="text-center">
//                     {logistics.value}
//                   </TableCell>
//                 </TableRow>
//               ))}
//             </TableBody>
//     </CardContent>
//   </Card>

//   {/* Projected MAX INV VIOLATION */}
//   <Card className="border shadow-sm">
//     <CardHeader className="pb-2">
//       <CardTitle className="text-sm font-medium text-gray-500">
//         CAPACITY
//       </CardTitle>
//       <div className="flex gap-1">
//       <span className="h-6 w-6 rounded-full bg-red-500 text-white text-center">2</span>
//           <span className="h-6 w-6 rounded-full bg-yellow-500 text-white text-center">3</span>

//         </div>
//     </CardHeader>
//     <CardContent className="pt-0">
//    <TableBody>
//               {capacity.map((capacity) => (
//                 <TableRow>
//                   <TableCell className="font-medium">
//                     {capacity.shipment}
//                   </TableCell>
//                   <TableCell className="text-center">
//                     {capacity.track}
//                   </TableCell>
//                 </TableRow>
//               ))}
//             </TableBody>
//     </CardContent>
//   </Card>

//   {/* Projected CAPACITY SHORTAGE */}
//   <Card className="border shadow-sm">
//     <CardHeader className="pb-2">
//       <CardTitle className="text-sm font-medium text-gray-500">
//         ORDERS
//       </CardTitle>
//       <div className="flex gap-1">

//           <span className="h-6 w-6 rounded-full bg-yellow-500 text-white text-center">6</span>
//           <span className="h-6 w-6 rounded-full bg-orange-500 text-white text-center">7</span>
//         </div>
//     </CardHeader>
//     <CardContent className="pt-0">
//     <TableBody>
//               {orders.map((orders) => (
//                 <TableRow>
//                   <TableCell className="font-medium">
//                     {orders.name}
//                   </TableCell>
//                   <TableCell className="text-center">
//                     {orders.value}
//                   </TableCell>
//                 </TableRow>
//               ))}
//             </TableBody>
//     </CardContent>
//   </Card>
// </div>
// </div>


// <div className="m-2">
//   <div className="items-start justify-center gap-6 rounded-lg p-4 grid lg:grid-cols-2 ">
//     <div className="">
//       <Card className="shadow-lg text-blue-900 bg-slate-50">
//         <CardHeader className="space-y-1 ">
//           <div className="flex gap-2">
//             <IoIosAlert className="text-4xl" />

//             <CardTitle className="text-2xl flex">Alerts</CardTitle>
//           </div>
//           <div className="border-b" />
//         </CardHeader>

//         <CardContent className="flex flex-auto gap-4 ">
//           <Card className=" w-[350px]">
//             <div className="-2">
//               <p className="m-2">INVENTORY</p>
              
//               <TableBody>
//                 {invoices.map((invoice) => (
//                   <TableRow>
//                     <TableCell className="">
//                       {invoice.shipment}
//                     </TableCell>
//                     <TableCell className="text-center">
//                       {invoice.track}
//                     </TableCell>
//                   </TableRow>
//                 ))}
//               </TableBody>
//             </div>
//           </Card>

//           <Card className="w-[350px]">
//             <div className="">
//               <p>LOGISTICS</p>
//               <TableBody>
//                 {logistics.map((logistics) => (
//                   <TableRow>
//                     <TableCell className="font-medium">
//                       {logistics.name}
//                     </TableCell>
//                     <TableCell className="text-center">
//                       {logistics.value}
//                     </TableCell>
//                   </TableRow>
//                 ))}
//               </TableBody>
//             </div>
//           </Card>

//           <Card className="w-[350px]">
//             <div className="">
//               <p>CAPACITY</p>
//               <TableBody>
//                 {capacity.map((capacity) => (
//                   <TableRow>
//                     <TableCell className="font-medium">
//                       {capacity.shipment}
//                     </TableCell>
//                     <TableCell className="text-center">
//                       {capacity.track}
//                     </TableCell>
//                   </TableRow>
//                 ))}
//               </TableBody>
//             </div>
//           </Card>

//           <Card className="w-[350px]">
//             <div className="">
//               <p>ORDERS</p>
//               <TableBody>
//                 {orders.map((orders) => (
//                   <TableRow>
//                     <TableCell className="font-medium">
//                       {orders.name}
//                     </TableCell>
//                     <TableCell className="text-center">
//                       {orders.value}
//                     </TableCell>
//                   </TableRow>
//                 ))}
//               </TableBody>
//             </div>
//           </Card>
//         </CardContent>
//       </Card>
//     </div>
//   </div>

//   <div className="flex justify-between">
//     <div className=" ">
//       <Card className="shadow-lg text-blue-900 bg-slate-50">
//         <CardHeader className="space-y-1 ">
//           <CardTitle className="text-2xl flex">Problems</CardTitle>

//           <div className="border-b" />
//         </CardHeader>

//         <CardContent className="grid grid-cols-4 gap-4">
//           <Card className="">
//             <div className="p-4 ">
//               <div className="flex justify-between">
//                 <p className="text-2xl">Projectted STOCKOUT</p>
//                 <FaBoxOpen className="h-10 w-10" />
//               </div>
//               <div className="flex justify-between">
//                 <TableBody>
//                   {stockout.map((stockout) => (
//                     <TableRow>
//                       <TableCell className="text-4xl font-bold text-sky-500">
//                         {stockout.value}
//                       </TableCell>
//                       <TableCell className="font-medium">
//                         {stockout.name}
//                       </TableCell>
//                       <TableCell className="rounded-full bg-red-500 w-5 h-2 text-white text-center">
//                         {stockout.red}
//                       </TableCell>
//                       <TableCell className="rounded-full bg-orange-500 text-white w-10 h-5 text-center">
//                         {stockout.orange}
//                       </TableCell>
//                       <TableCell className="rounded-full bg-yellow-500 text-white w-10 h-5 text-center">
//                         {stockout.yellow}
//                       </TableCell>
//                     </TableRow>
//                   ))}
//                 </TableBody>
//               </div>
//             </div>
//           </Card>

//           <Card className="">
//             <div className="">
//               <p>Projectted MIN INV VIOLATION</p>

//               <div className="flex justify-between">
//                 <TableBody>
//                   {min.map((min) => (
//                     <TableRow>
//                       <TableCell className="text-4xl font-bold text-sky-500">
//                         {min.value}
//                       </TableCell>
//                       <TableCell className="font-medium">
//                         {min.name}
//                       </TableCell>
//                       <TableCell className="rounded-full bg-red-500 text-white text-center">
//                         {min.red}
//                       </TableCell>
//                       <TableCell className="rounded-full bg-orange-500 text-white w-10 h-5 text-center">
//                         {min.orange}
//                       </TableCell>
//                     </TableRow>
//                   ))}
//                 </TableBody>
//               </div>
//             </div>
//           </Card>

//           <Card className="">
//             <div className="">
//               <p>Projectted MAX INV VIOLATION</p>
//               <div className="flex justify-between">
//                 <TableBody>
//                   {max.map((max) => (
//                     <TableRow>
//                       <TableCell className="text-4xl font-bold text-sky-500">
//                         {max.value}
//                       </TableCell>
//                       <TableCell className="font-medium">
//                         {max.name}
//                       </TableCell>
//                       <TableCell className="rounded-full bg-red-500 w-5 h-2 text-white text-center">
//                         {max.red}
//                       </TableCell>
//                       <TableCell className="rounded-full bg-orange-500 text-white w-10 h-5 text-center">
//                         {max.orange}
//                       </TableCell>
//                       <TableCell className="rounded-full bg-yellow-500 text-white w-10 h-5 text-center">
//                         {max.yellow}
//                       </TableCell>
//                     </TableRow>
//                   ))}
//                 </TableBody>
//               </div>
//             </div>
//           </Card>
//         </CardContent>

//         <div>
//           <CardContent className="grid grid-cols-4 gap-4">
//             <Card className="">
//               <div className="">
//                 <p>Projectted CAPACITY SHORTAGE</p>
//                 <div className="flex justify-between">
//                   <TableBody>
//                     {shortage.map((shortage) => (
//                       <TableRow>
//                         <TableCell className="text-4xl font-bold text-sky-500">
//                           {shortage.value}
//                         </TableCell>
//                         <TableCell className="font-medium">
//                           {shortage.name}
//                         </TableCell>
//                         <TableCell className="rounded-full bg-red-500 w-5 h-2 text-white text-center">
//                           {shortage.red}
//                         </TableCell>
//                         <TableCell className="rounded-full bg-orange-500 text-white w-10 h-5 text-center">
//                           {shortage.orange}
//                         </TableCell>
//                         <TableCell className="rounded-full bg-yellow-500 text-white w-10 h-5 text-center">
//                           {shortage.yellow}
//                         </TableCell>
//                       </TableRow>
//                     ))}
//                   </TableBody>
//                 </div>
//               </div>
//             </Card>

//             <Card className="">
//               <div className="">
//                 <p>Upcoming CONTRACT SHORTAGE</p>
//                 <div className="flex justify-between">
//                   <TableBody>
//                     {contract.map((contract) => (
//                       <TableRow>
//                         <TableCell className="text-4xl font-bold text-sky-500">
//                           {contract.value}
//                         </TableCell>
//                         <TableCell className="font-medium">
//                           {contract.name}
//                         </TableCell>
//                         <TableCell className="rounded-full bg-orange-500 text-white w-10 h-5 text-center">
//                           {contract.orange}
//                         </TableCell>
//                         <TableCell className="rounded-full bg-yellow-500 text-white w-10 h-5 text-center">
//                           {contract.yellow}
//                         </TableCell>
//                       </TableRow>
//                     ))}
//                   </TableBody>
//                 </div>
//               </div>
//             </Card>

//             <Card className="">
//               <div className="">
//                 <p>Projectted LATE DELIVERY</p>
//                 <div className="flex justify-between">
//                   <TableBody>
//                     {late.map((late) => (
//                       <TableRow>
//                         <TableCell className="text-4xl font-bold text-sky-500">
//                           {late.value}
//                         </TableCell>
//                         <TableCell className="font-medium">
//                           {late.name}
//                         </TableCell>
//                         <TableCell className="rounded-full bg-red-500 w-5 h-2 text-white text-center">
//                           {late.red}
//                         </TableCell>
//                       </TableRow>
//                     ))}
//                   </TableBody>
//                 </div>
//               </div>
//             </Card>
//           </CardContent>
//         </div>
//       </Card>
//     </div>
//   </div>
// </div>

// <div className="flex justify-between">
//   <div className=" ">
   

//   </div>
// </div>

// <div className=" flex justify-between rounded-lg">
//   <div className=" shadow-lg text-blue-900 bg-slate-50  ">
//     <h4 className="text-2xl">Top 5 Suuplier On Time Full</h4>
//     <div className="shadow-lg text-blue-900 bg-slate-50 ">
//       <Supplier />
//     </div>
//   </div>

//   <div className="shadow-lg">
//     <div className="">
//       <h4 className="text-2xl">Top 5 Carrier On Time Delivery</h4>
//       <div className="shadow-lg text-blue-900 bg-slate-100 ">
//         <Carrying />
//       </div>
//     </div>
//   </div>

//   <div className="shadow-lg text-blue-900 bg-slate-200">
//     <div className="">
//       <h4 className="text-2xl">Top 5 Carrier On Time Delivery</h4>
//       <div className=" ">
//         <Carrying />
//       </div>
//     </div>
//   </div>
// </div> */}