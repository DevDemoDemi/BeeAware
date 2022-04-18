// Census and survey data from the USDA and colony loss data from Bee Informed.
//csv provided by data.world  https://data.world/finley/bee-colony-statistical-data-from-1987-2017
// Bee Colony Survey Data by State data was retrieved from the United States Department of Agriculture National Agricultural Statistics Service Quick Stats Dataset with the selection criteria shown in the file Search criteria for bee colony census attached to this dataset.
let dataSet= []
// created an async function to keep d3 from charting undefined data

let getData = async ()=>{ 
await d3.csv('Bee Colony Survey Data by State.csv',function(data){
let obj =
{
  date:data.Year, // dates are year format instead of month-day-year
  value:parseInt(data.Value.split(',').join("")),
  state:data.State
}
dataSet.push(obj)  
// return obj
// console.log(obj)
// console.log(data)
// dataSet.push(data)
})
// console.log(dataSet[0])
// filtered dataset to arizona data before 2014
dataSet = dataSet.filter(d => {
  if(d.state == "ARIZONA" && parseInt(d.date) < 2014){
    return d
  }
})

// console.log("data",result())
console.log("data",dataSet)
beeData = dataSet;
// set the dimensions and margins of the graph
var margin = { top: 10, right: 30, bottom: 30, left: 60 },
  width = 800 - margin.left - margin.right,
  height = 400 - margin.top - margin.bottom;

// append the svg object to the body of the page
var svg = d3.select("#section")
  .append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .append("g")
  .attr("transform",
    "translate(" + margin.left + "," + margin.top + ")");

// console.log(data)

const xScale = d3.scaleTime()
  .domain([Date.parse(d3.min(beeData, (d) => d.date)),Date.parse( d3.max(beeData, (d) => d.date))])
  .range([0, width])

const yScale = d3.scaleLinear()
  .domain([d3.min(beeData, (d) => d.value), d3.max(beeData, (d) => d.value)])
  .range([height, 0])

svg.append("g")
  .attr("transform", "translate(0," + height + ")")
  .call(d3.axisBottom(xScale));


svg.append("g")
  // .attr("transform", "translate(0," + height + ")")
  .call(d3.axisLeft(yScale));

// console.log(xScale)
// console.log(yScale)

svg.append("path")
  .datum(beeData)
  .attr("fill", "none")
  .attr("stroke", "steelblue") // bee line color
  .attr("stroke-width", 2.5)  // bell line width
  .attr("d", d3.line()
    .x((d) => xScale(Date.parse(d.date)))
    .y((d) => yScale(d.value))
  )


}
getData()