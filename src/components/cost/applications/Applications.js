import React, { useEffect, useState, memo } from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import { useDispatch, useSelector } from "react-redux";

import { Link, useHistory } from "react-router-dom";

import {
  fetchData,
  fetchApplicationsData,
} from "../../../redux/applications/applications.actions";
import { APPLICATIONS_FEATURE_KEY } from "../../../redux/applications/applications.reducer";
import Spinner from "../../root/spinner/Spinner";

const Applications = () => {
  let dispatch = useDispatch();

  let applicationInfo = useSelector((state) => {
    return state[APPLICATIONS_FEATURE_KEY];
  });
  let [selectedApp, setSelectedApp] = useState("Macao");
  let { loading, applications, applicationList } = applicationInfo;
  useEffect(() => {
    dispatch(fetchApplicationsData());
  }, []);
  useEffect(() => {
    dispatch(
      fetchData(
        `https://engineering-task.elancoapps.com/api/applications/${selectedApp}`
      )
    );
  }, [selectedApp]);

  const handleOnchange = (e) => {
    setSelectedApp(e.target.value);
  };
  console.log(applicationList.length);

  const data = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <main className="col-md-12 ms-sm-auto col-lg-12 px-md-4">
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
              <h1 className="h2">Applications</h1>
              <div className="btn-toolbar mb-2 mb-md-0">
                <form>
                  <div class="form-group row">
                    <label for="" class="col-sm-6 form-control-label">
                      Applications
                    </label>
                    <div class="col-sm-10">
                      <select
                        class="form-control selectpicker"
                        id="select-country"
                        data-live-search="true"
                        onChange={handleOnchange}
                      >
                        {applicationList.length > 0 ? (
                          applicationList.map((app, index) => {
                            return <option data-tokens={app}>{app}</option>;
                          })
                        ) : (
                          <option data-tokens="select">Select</option>
                        )}
                      </select>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            <BarChart
              width={800}
              height={300}
              data={applications}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="ConsumedQuantity" />
              <YAxis dataKey="Cost" />

              <Bar dataKey="ConsumedQuantity" fill="#82ca9d" />
            </BarChart>

            <h2>App List</h2>
            <div className="table-responsive">
              <table className="table table-striped table-sm">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">ResourceGroup</th>
                    <th scope="col">ConsumedQuantity</th>
                    <th scope="col">Cost</th>
                    <th scope="col">Date</th>
                    <th scope="col">MeterCategory</th>
                    <th scope="col">InstanceId</th>
                    <th scope="col">ResourceLocation</th>
                  </tr>
                </thead>
                <tbody>
                  {loading ? (
                    <Spinner />
                  ) : (
                    <>
                      {applications.length > 0
                        ? applications.map((application, index) => {
                            const {
                              ConsumedQuantity,
                              Cost,
                              Date,
                              InstanceId,
                              ResourceGroup,
                              MeterCategory,
                              Location,
                            } = application;

                            return (
                              <tr key={index}>
                                <td>{index}</td>
                                <td>{ResourceGroup}</td>
                                <td>{ConsumedQuantity}</td>
                                <td>{Cost}</td>
                                <td>{Date}</td>
                                <td>{MeterCategory}</td>
                                <td>{InstanceId}</td>
                                <td>{Location}</td>
                              </tr>
                            );
                          })
                        : "No data available"}
                    </>
                  )}
                </tbody>
              </table>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};
export default memo(Applications);
