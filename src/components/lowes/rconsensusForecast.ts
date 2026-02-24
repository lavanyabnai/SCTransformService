function generateData() {
    const items = ['SKU-1234', 'SKU-5678', 'SKU-9012', 'SKU-3456', 'SKU-7890'];
    const customers = ['Customer A', 'Customer B'];
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
    ];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'];
    
    const forecastTypes = [
      'Sales Forecast (Units)',
      'Marketing Forecast (Units)',
      'Financial Forecast (Units)'
    ];
  
    let data: { customer: string; site: string; item: string; measure: string; }[] = [];
  
    items.forEach(item => {
      customers.forEach(customer => {
        sites.forEach(site => {
          // Initialize forecasts and base values
          const baseValues: Record<string, Record<string, number>> = {};
          forecastTypes.forEach(forecast => {
            baseValues[forecast] = {};
            months.forEach(month => {
              baseValues[forecast][`2024-${month}`] = Math.floor(Math.random() * 10000) + 5000;
            });
          });
  
          // Generate data points for each forecast type
          forecastTypes.forEach(forecast => {
            const dataPoint = {
              customer,
              site,
              item,
              measure: forecast,
              ...baseValues[forecast]
            };
            data.push(dataPoint);
          });
  
          // Calculate and add Consensus Forecast (average of the three forecasts)
          const consensusDataPoint = {
            customer,
            site,
            item,
            measure: 'Consensus Forecast (Units)',
          };
  
          months.forEach(month => {
            const avg =
              (baseValues['Sales Forecast (Units)'][`2024-${month}`] +
                baseValues['Marketing Forecast (Units)'][`2024-${month}`] +
                baseValues['Financial Forecast (Units)'][
                  `2024-${month}`
                ]) /
              3;
            (consensusDataPoint as Record<string, any>)[`2024-${month}`] = Math.round(avg);
          });
  
          data.push(consensusDataPoint);
        });
      });
    });
  
    return data;
  }
  
  export const generatedForecastData = generateData();
  // console.log(generatedForecastData);
  