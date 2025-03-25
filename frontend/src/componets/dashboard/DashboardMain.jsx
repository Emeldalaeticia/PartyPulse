import React from 'react';
import { Card, Metric, Text } from "@tremor/react";
import barbieData from "./barbieData.json";
import oppenheimerData from "./oppenheimerData.json";
import { Link } from 'react-router-dom';

function addCommasToNumber(number) {
  let numString = number.toString();
  numString = numString.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return numString;
}

const DashboardMain = () => {
  return (
    <div className="space-y-6">
      <Link 
        to="/createevent" 
        className="block bg-purple-500 py-3 px-4 text-white rounded-md w-full text-center hover:bg-purple-600 transition-colors"
      >
        Create Event
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Barbie Card */}
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-xl md:text-2xl font-bold mb-4">Barbie</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <img 
              src={barbieData.poster_path} 
              alt="Barbie Poster" 
              className="w-full h-auto rounded-lg object-cover"
            />
            <div className="space-y-4">
              <Card className="w-full" decoration="top" decorationColor="pink">
                <Text>Revenue</Text>
                <Metric>$ {addCommasToNumber(barbieData.global_revenue)}</Metric>
              </Card>
              <Card className="w-full" decoration="top" decorationColor="pink">
                <Text>Budget</Text>
                <Metric>$ {addCommasToNumber(barbieData.budget)}</Metric>
              </Card>
            </div>
          </div>
        </div>

        {/* Oppenheimer Card */}
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-xl md:text-2xl font-bold mb-4">Oppenheimer</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <img 
              src={oppenheimerData.poster_path} 
              alt="Oppenheimer Poster" 
              className="w-full h-auto rounded-lg object-cover"
            />
            <div className="space-y-4">
              <Card className="w-full" decoration="top" decorationColor="indigo">
                <Text>Revenue</Text>
                <Metric>$ {addCommasToNumber(oppenheimerData.global_revenue)}</Metric>
              </Card>
              <Card className="w-full" decoration="top" decorationColor="indigo">
                <Text>Budget</Text>
                <Metric>$ {addCommasToNumber(oppenheimerData.budget)}</Metric>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardMain;