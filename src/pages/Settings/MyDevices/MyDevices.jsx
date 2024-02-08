import { useState } from "react";

import {
  deviceAndroid,
  deviceIpad,
  deviceIphone,
  deviceMac,
  devicePc,
} from "assets";
import classes from "./MyDevices.module.css";
import DeviceLogout from "modals/DeviceLogout/DeviceLogout";

const data = [
  {
    id: "some-id-1",
    icon: deviceMac,
    type: "Macbook",
    name: "Chrome",
    ip: "103.190.89.240",
    lastLoginTimestamp: "2024-02-01 06:45:49",
    lastLoginPlace: "Dhaka, Bangladesh",
  },
  {
    id: "some-id-2",
    icon: devicePc,
    type: "Windows",
    name: "Chrome",
    ip: "103.190.89.240",
    lastLoginTimestamp: "2024-02-01 06:45:49",
    lastLoginPlace: "Dhaka, Bangladesh",
  },
  {
    id: "some-id-3",
    icon: deviceAndroid,
    type: "Android",
    name: "Apps",
    ip: "103.190.89.240",
    lastLoginTimestamp: "2024-02-01 06:45:49",
    lastLoginPlace: "Dhaka, Bangladesh",
  },
  {
    id: "some-id-4",
    icon: deviceAndroid,
    type: "Android",
    name: "Firefox",
    ip: "103.190.89.240",
    lastLoginTimestamp: "2024-02-01 06:45:49",
    lastLoginPlace: "Dhaka, Bangladesh",
  },
  {
    id: "some-id-5",
    icon: deviceIphone,
    type: "iPhone",
    name: "Apps",
    ip: "103.190.89.240",
    lastLoginTimestamp: "2024-02-01 06:45:49",
    lastLoginPlace: "Dhaka, Bangladesh",
  },
  {
    id: "some-id-6",
    icon: deviceIpad,
    type: "Macbook",
    name: "Chrome",
    ip: "103.190.89.240",
    lastLoginTimestamp: "2024-02-01 06:45:49",
    lastLoginPlace: "Dhaka, Bangladesh",
  },
];

const MyDevices = () => {
  const [isLogoutConfirmationModalActive, setIsLogoutConfirmationModalActive] =
    useState(false);
  const [selectedId, setSelectedId] = useState("");
  const [devices, setDevices] = useState(data);

  const deleteDeviceHandler = () => {
    setDevices((prev) => {
      let newState = [...prev];
      newState = newState.filter((el) => el.id !== selectedId);

      return newState;
    });
  };

  return (
    <div>
      <DeviceLogout
        isActive={isLogoutConfirmationModalActive}
        onClose={() => setIsLogoutConfirmationModalActive(false)}
        onConfirm={() => {
          deleteDeviceHandler(selectedId);
          setIsLogoutConfirmationModalActive(false);
        }}
      />

      <div className={classes.tableContainer}>
        <table className={classes.table}>
          <thead>
            <tr>
              <th>Device</th>
              <th>Last Login</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {devices.map((el, idx) => {
              return (
                <tr key={"device-item-" + idx} className={classes.row}>
                  <td>
                    <div className={classes.deviceInfo}>
                      <img src={el.icon} alt={el.type} />
                      <div>
                        <h6>
                          {el.type} • {el.name}
                        </h6>
                        <p>{el.ip}</p>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className={classes.loginInfo}>
                      <p>{el.lastLoginTimestamp}</p>
                      <p>{el.lastLoginPlace}</p>
                    </div>
                  </td>
                  <td>
                    <button
                      className={classes.logout}
                      onClick={() => {
                        setIsLogoutConfirmationModalActive(true);
                        setSelectedId(el.id);
                      }}
                    >
                      Logout
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyDevices;
