"use client"
import { useState, useEffect } from 'react';

export default function Homer() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('/api/username')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  let exampleArray = [['object 1',"Information 1"],['object 2', "Information 2"]]

  function loopThroughArray(arrayZ) {
    return arrayZ.map(element => {
        return (
  <>
        <tr>
            <th class="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">{element[0]}</th>
        </tr>
  </>
    )
      });
  }


  return (
    <div>
      {data ? (
        <div class="min-h-screen flex flex-col bg-tan-500">
        <div class="flex-grow-0">
            <h1 class="text-center text-4xl font-bold py-4">VRChat</h1>
        </div>
        <div class="flex-grow p-4">
            <table class="w-full text-left border-collapse">
                <thead>
                    <tr>
                        <th class="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">Object</th>
                        <th class="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">Information</th>
                    </tr>
                </thead>
                <tbody>
          {loopThroughArray(exampleArray)}
                </tbody>
            </table>
        </div>
    </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}