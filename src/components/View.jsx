import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'

const View = () => {
  const [data, changeData] = useState([])
  const fetchDataFromApi = () => {
    axios.get("https://jsonplaceholder.typicode.com/todos").then(
      (response) => {
        changeData(response.data)
      }
    ).catch()
  }
  useEffect(() => { fetchDataFromApi() }, [])
  return (
    <div>
      <div className="container">
        <Navbar />
        <div className="row" style={{ marginTop: 80 }}>
          <div className="col col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div class="card">
              <div class="card-body">
                <div className="row g-3">
                  <div className="col col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <table class="table table-hover">
                      <thead>
                        <tr>
                          <th scope="col"><b>User ID</b></th>
                          <th scope="col"><b>ID</b></th>
                          <th scope="col"><b>Title</b></th>
                          <th scope="col"><b>Completed Status</b></th>
                        </tr>
                      </thead>
                      <tbody>
                        {
                          data.map(
                            (value, index) => {
                              return <tr>
                                <th scope="row">{value.userId}</th>
                                <td>{value.id}</td>
                                <td>{value.title}</td>
                                <td>{value.completed ? "true" : "false"}</td>
                              </tr>
                            })
                        }
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default View
