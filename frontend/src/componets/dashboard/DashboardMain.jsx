import React from 'react';
import { Card, Metric, Text } from "@tremor/react";
import barbieData from "./barbieData.json";
import oppenheimerData from "./oppenheimerData.json";
import { Link } from 'react-router-dom';


function addCommasToNumber(number) {
  // Convert the nuber to a string
  let numString = number.toString();

  //use regex to add commas to the string representation of the number
  numString = numString.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return numString;

}

const DashboardMain = () => {
  return (
    <>
      <div>
        <button className="bg-purple-500 py-3 text-white rounded-md w-full mt-6"> <Link to="/createevent"> Create Event </Link></button>
      </div>
      <div className='grid grid-cols-2 gap-12'>
        <div>
          <h2 className='text-2xl font-bold mb-6'>Barbie</h2>
          <div className='grid grid-cols-2 gap-12'>
            <img src={barbieData.poster_path} alt="Poster" />
            <div>
              <Card className="max-w-xs mx-auto mb-6" decoration="top" decorationColor="pink">
                <Text>Revenue</Text>
                <Metric>$ {addCommasToNumber(barbieData.global_revenue)} </Metric>
              </Card>
              <Card className="max-w-xs mx-auto mb-6" decoration="top" decorationColor="pink">
                <Text>Budget</Text>
                <Metric>$ {addCommasToNumber(barbieData.budget)} </Metric>
              </Card>
            </div>
          </div>
        </div>
        <div>
          <h2 className='text-2xl font-bold mb-6'>Oppenheimer</h2>
          <div className='grid grid-cols-2 gap-10'>
            <img src={oppenheimerData.poster_path} alt="Poster" />
            <div>
              <Card className="max-w-xs mx-auto mb-6" decoration="top" decorationColor="indigo">
                <Text>Revenue</Text>
                <Metric>$ {addCommasToNumber(oppenheimerData.global_revenue)} </Metric>
              </Card>
              <Card className="max-w-xs mx-auto " decoration="top" decorationColor="indigo">
                <Text>Budget</Text>
                <Metric>$ {addCommasToNumber(oppenheimerData.budget)} </Metric>
              </Card>
            </div>
          </div>
        </div>
      </div></>
  );
};

export default DashboardMain;

{/* Placeholder for the dashboard components <h1 className="text-2xl font-bold mb-4">Dashboard</h1> */}

