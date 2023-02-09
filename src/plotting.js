import React from 'react';
import {useState} from 'react';
import Map from './mapping';
const Count= (ExcelData)=>{
    {
      var rand= [];
      var temp= [];
      var cnt=  [];
      var cnt1= [];
        ExcelData.ExcelData.map((iterator)=>{
          const {Latitude} = iterator;
          const {Longitude}= iterator;
          const {Latitude_COG}= iterator;
          const {Longitude_COG}= iterator;
          const {Volume}= iterator;
          var cordi= {Latitude, Longitude}
          var cordi_1= {Latitude, Longitude,Latitude_COG,Longitude_COG};
          var cordi_2= {Latitude_COG,Longitude_COG};
          var cordi_3= {Volume,cordi,cordi_1,cordi_2};
          rand= [...rand,cordi];
          temp= [...temp,cordi_3];
        })
    }
    console.log(rand);
    console.log(temp);
    return(
        <Map points={rand}/>
    )
}
export default Count;