import React, {useState, useEffect} from 'react';

const USERS_URL = 'https://example.com/api/users';


const API = {
  "count": 3,
  "results": [
    { "id": 1, "firstName": "David", "lastName": "Wallace" },
    { "id": 2, "firstName": "Sonia", "lastName": "Ross" },
    { "id": 3, "firstName": "Anthony", "lastName": "Thomson" },
    { "id": 4, "firstName": "Sonia", "lastName": "Ross" },
    { "id": 5, "firstName": "Anthony", "lastName": "Thomson" },
    { "id": 6, "firstName": "Sonia", "lastName": "Ross" },
    { "id": 7, "firstName": "Anthony", "lastName": "Thomson" },
    { "id": 8, "firstName": "Sonia", "lastName": "Ross" },
    { "id": 9, "firstName": "Anthony", "lastName": "Thomson" },
    { "id": 10, "firstName": "Sonia", "lastName": "Ross" },
    { "id": 11, "firstName": "Anthony", "lastName": "Thomson" },
    { "id": 12, "firstName": "Sonia", "lastName": "Ross" },
    { "id": 13, "firstName": "Anthony", "lastName": "Thomson" },
    { "id": 14, "firstName": "Sonia", "lastName": "Ross" },
    { "id": 15, "firstName": "Anthony", "lastName": "Thomson" },
    { "id": 16, "firstName": "Sonia", "lastName": "Ross" },
    { "id": 17, "firstName": "Anthony", "lastName": "Thomson" },
    { "id": 18, "firstName": "Sonia", "lastName": "Ross" },
    { "id": 19, "firstName": "Anthony", "lastName": "Thomson" },
    { "id": 20, "firstName": "Sonia", "lastName": "Ross" },
    { "id": 21, "firstName": "Anthony", "lastName": "Thomson" },
    { "id": 22, "firstName": "Sonia", "lastName": "Ross" },
    { "id": 23, "firstName": "Anthony", "lastName": "Thomson" },
    { "id": 24, "firstName": "Sonia", "lastName": "Ross" },
    { "id": 25, "firstName": "Anthony", "lastName": "Thomson" },
    { "id": 26, "firstName": "Sonia", "lastName": "Ross" },
    { "id": 27, "firstName": "Anthony", "lastName": "Thomson" }
  ]
}
let page = 1;

export default function Table () {
    const [dataResults, setDataResults] = useState({count:0, results:[]})
    const [buttons, setButtons] = useState({fists: false, previous:false ,next: false, last: false })
    const getData = (page) => {
        setButtons({fists: true, previous:true ,next: true, last: true })
        // fetch(`USERS_URL/page=${page}`)
        // .then(response => response.json())
        // .then(data => setDataResults(data))
        setTimeout(() => {
            setDataResults({...API, results: API.results.slice((page-1)*10,page*10)})
            setButtons({fists: page===1, previous:page===1 ,next: page===dataResults.count, last: page===dataResults.count })

        }, 1000);
    }
    useEffect(() => {
        getData(page)
    },[])

    const getFirst = () => {
        page = 1
        getData(page)
    }
    const getPrevious =  () => {
        page -= 1 
        getData(page)
    }
    const getNext =  () => {
        page += 1
        console.log(page);
        getData(page)
    }
    const getLast=  () => {
        page = dataResults.count
        getData(page)
    }

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
          </tr>
        </thead>
        <tbody>
        {dataResults.results.map(i => (
            <tr key={i.id}>
                <td>
                    {i.id}
                </td>
                <td>
                    {i.firstName}
                </td>
                <td>
                    {i.lastName}
                </td>
            </tr>
        ))}
        </tbody>
      </table>
      <section className="pagination">
        <button className="first-page-btn" onClick={getFirst} disabled={buttons.fists}>first</button>
        <button className="previous-page-btn" onClick={getPrevious}  disabled={buttons.previous}>previous</button>
        <button className="next-page-btn" onClick={getNext} disabled={buttons.next}>next</button>
        <button className="last-page-btn" onClick={getLast} disabled={buttons.last}>last</button>
      </section>
    </div>
  );
};