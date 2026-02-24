function generateData() {
  const items = ['SKU-1234', 'SKU-5678', 'SKU-9012', 'SKU-3456', 'SKU-7890']
  const customers = ['Customer A', 'Customer B']
  const sites = [
    'New York',
    'California',
    'Atlanta',
    'Chicago',
    'Dallas',
    'Miami',
    'Seattle',
    'Los Angeles',
    'San Francisco',
    'Boston',
  ]
  const measures = [
    'Opening On Hand Inventory (Units)',
    'Inbound Flow (Units)',
    'Outbound Flow (Units)',
    'Closing On Hand Inventory (Units)',
  ]

  let data: { customer: string; site: string; item: string; measure: string }[] = []

  items.forEach((item) => {
    customers.forEach((customer) => {
      sites.forEach((site) => {
        measures.forEach((measure) => {
          const dataPoint = {
            customer,
            site,
            item,
            measure,
          }

          data.push(dataPoint)
        })
      })
    })
  })

  return data
}

export const generatedInventoryData = generateData()
// console.log(JSON.stringify(generatedInventoryData, null, 2))
