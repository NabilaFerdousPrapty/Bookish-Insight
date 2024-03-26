
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from "recharts";
import { scaleOrdinal } from "d3-scale";
import { schemeCategory10 } from "d3-scale-chromatic";
import { useEffect, useState } from "react";

const colors = scaleOrdinal(schemeCategory10).range();




const getPath = (x, y, width, height) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${
    y + height / 3
  } 
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
    x + width
  }, ${y + height}
  Z`;
};

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;

  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

const PagesChart = () => {
    const [readBooks,setReadBooks]=useState([]);
    useEffect(()=>{
        const storedBooks=JSON.parse(localStorage.getItem('read'))||[];
        setReadBooks(storedBooks);
    },[])
  return (
    <div className="lg:max-w-screen-lg max-w-screen-md  mx-auto lg:px-3">
        <BarChart 
    width={window.innerWidth > 768 ? 1000 : window.innerWidth * 1}
    height={window.innerWidth > 768 ? 400 : window.innerWidth * 0.8}
      data={readBooks}
      margin={{
        top: 20,
        right: 10,
        left: 10,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis className='text-xs md:text-base' dataKey="bookName" />
      <YAxis />
      <Bar
        dataKey="totalPages"
        fill="#8884d8"
        shape={<TriangleBar />}
        label={{ position: "top" }}
      >
        {readBooks.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={colors[index % 20]} />
        ))}
      </Bar>
    </BarChart>
    </div>
  );
};

export default PagesChart;
