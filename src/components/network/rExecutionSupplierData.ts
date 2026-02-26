function generateData() {
  const supplierNames = [
    'Supplier-Alpha',
    'Supplier-Beta',
    'Supplier-Gamma',
    'Supplier-Delta',
    'Supplier-Epsilon',
  ]
  const productTypes = [
    'Electrical',
    'Plumbing',
    'Tools',
    'Gardening',
    'Flooring',
  ]
  const locations = ['New York', 'California', 'Texas', 'Florida', 'Washington']
  const measures = [
    'Order Fulfillment Rate',
    'Average Lead Time (Days)',
    'Product Quality Score',
    'Return Rate',
    'Production Capacity Utilization',
    'Cost per Unit Produced',
  ]
  const days = Array.from({ length: 7 }, (_, i) => `Day_${i + 1}`) // Generate days Day 1 to Day 7

  let data: { supplierName: string; productType: string; location: string; measure: string }[] = []

  supplierNames.forEach((supplierName) => {
    productTypes.forEach((productType) => {
      locations.forEach((location) => {
        measures.forEach((measure) => {
          let dailyValues: { [key: string]: number | string } = {}
          days.forEach((day) => {
            // Generating random values for each measure
            if (measure === 'Average Lead Time (Days)') {
              dailyValues = {...dailyValues, [day]: Math.floor(Math.random() * 5 + 1)} // Lead time in days
            } else if (
              measure === 'Order Fulfillment Rate' ||
              measure === 'Product Quality Score'
            ) {
              dailyValues = {...dailyValues, [day]: (Math.random() * 100).toFixed(2) + '%'} // Rate in percentage
            } else if (measure === 'Return Rate') {
              dailyValues = {...dailyValues, [day]: (Math.random() * 5).toFixed(2) + '%'} // Rate in percentage
            } else if (measure === 'Production Capacity Utilization') {
              dailyValues = {...dailyValues, [day]: (Math.random() * 100).toFixed(2) + '%'} // Utilization in percentage
            } else if (measure === 'Cost per Unit Produced') {
                dailyValues = {...dailyValues, [day]: (Math.random() * 50 + 10).toFixed(2) } // Cost in USD
            }
          })

          const dataPoint = {
            supplierName,
            productType,
            location,
            measure,
            ...dailyValues,
          }

          data.push(dataPoint)
        })
      })
    })
  })

  return data
}

export const generatedData = generateData()
// console.log(JSON.stringify(generatedData, null, 2))
