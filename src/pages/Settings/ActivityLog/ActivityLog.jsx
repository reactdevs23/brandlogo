import { useState } from "react";
import classes from "./ActivityLog.module.css";
import clsx from "clsx";
import Button from "components/common/Button/Button";

const data = [
  {
    date: "2024-02-01 06:46:01",
    source: "Web",
    ip: "103.190.89.240",
    status: "Completed",
  },
  {
    date: "2024-02-01 06:46:01",
    source: "Web",
    ip: "103.190.89.240",
    status: "Completed",
  },
  {
    date: "2024-02-01 06:46:01",
    source: "Web",
    ip: "103.190.89.240",
    status: "Completed",
  },
  {
    date: "2024-02-01 06:46:01",
    source: "Web",
    ip: "103.190.89.240",
    status: "Failed",
  },
  {
    date: "2024-02-01 06:46:01",
    source: "Web",
    ip: "103.190.89.240",
    status: "Completed",
  },
  {
    date: "2024-02-01 06:46:01",
    source: "Web",
    ip: "103.190.89.240",
    status: "Completed",
  },
  {
    date: "2024-02-01 06:46:01",
    source: "Web",
    ip: "103.190.89.240",
    status: "Failed",
  },
  {
    date: "2024-02-01 06:46:01",
    source: "Web",
    ip: "103.190.89.240",
    status: "Completed",
  },
  {
    date: "2024-02-01 06:46:01",
    source: "Web",
    ip: "103.190.89.240",
    status: "Completed",
  },
  {
    date: "2024-02-01 06:46:01",
    source: "Web",
    ip: "103.190.89.240",
    status: "Completed",
  },
  {
    date: "2024-02-01 06:46:01",
    source: "Web",
    ip: "103.190.89.240",
    status: "Failed",
  },
  {
    date: "2024-02-01 06:46:01",
    source: "Web",
    ip: "103.190.89.240",
    status: "Completed",
  },
];

const ActivityLog = () => {
  const [activityLog, setActivityLog] = useState(data);

  const onLoadMore = () => {
    setActivityLog((prev) => [...prev, ...data]);
  };

  return (
    <div className={classes.log}>
      <div className={classes.tableContainer}>
        <table className={classes.table}>
          <thead>
            <tr>
              <th>Date</th>
              <th>Source</th>
              <th>IP Address</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {activityLog.map((el, idx) => {
              return (
                <tr key={"log-" + idx} className={classes.row}>
                  <td>
                    <h6>{el.date}</h6>
                  </td>
                  <td>{el.source}</td>
                  <td>{el.ip}</td>
                  <td>
                    <div className={clsx(classes.status, classes[el.status])}>
                      {el.status}
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <Button black200 className={classes.btn} size="sm" onClick={onLoadMore}>
        Load More
      </Button>
    </div>
  );
};

export default ActivityLog;
