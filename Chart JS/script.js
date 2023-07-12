const url = 'https://unpkg.com/world-atlas@2.0.2/countries-50m.json';
// topojson = lines or arcs combines together = country 
// geojson = fixed shape of a country
fetch(url).then((result) => result.json()).then((datapoint) => {
  const countries = ChartGeo.topojson.features(datapoint, datapoint.objects.countries).features;
  
  console.log(countries);
}) // parsing json to java

const ctx = document.getElementById('myChart');

new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [{
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
}); 