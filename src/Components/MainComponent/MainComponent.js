import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import WidgetDisplayer from "../WidgetDisplayer/WidgetDisplayer";
import StudentsList from "../StudentsList/StudentsList";
import "./MainComponent.scss";

const MainComponent = () => {
  const [parentName, setParentName] = useState("");
  const [studentName, setStudentName] = useState("");
  const [students, setStudents] = useState([]);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [widgetData, setWidgetData] = useState({});

  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/users/getusersbyparent/${id}`)
      .then((result) => {
        setError(false);
        setErrorMessage("");
        setParentName(`${result?.data?.fname} ${result?.data?.lname}`);
        setStudents(result?.data?.users);
        if (result?.data?.users?.length > 0) {
          getStudentData(
            result?.data?.users[0]?.id,
            `${result?.data?.users[0]?.fname} ${result?.data?.users[0]?.lname}`
          );
        }
      })
      .catch((err) => {
        setError(true);
        setErrorMessage(err?.response?.data?.msg);
      });
  }, []);

  const getStudentData = (id, studentName) => {
    setStudentName(studentName);
    axios
      .get(`http://localhost:5000/users/getusersstatistics/${id}`)
      .then((result) => {
        setWidgetData(result.data);
      })
      .catch((err) => {
        setError(true);
        setErrorMessage(err?.response?.data?.msg);
      });
  };

  return (
    <div className="container">
      {error ? (
        <h1>{errorMessage}</h1>
      ) : (
        <div className="widgetHolder">
          <div className="row">
            <div className="col-md-10">
              <div className="row">
                <div className="col-12 helloText">
                  {students?.length > 0 ? (
                    <span>
                      Hello {parentName}, see how {studentName} is doing
                    </span>
                  ) : (
                    <span>
                      Hello {parentName}, you don`t have any children registered
                      yet
                    </span>
                  )}
                </div>
              </div>
              {students?.length > 0 ? (
                <WidgetDisplayer data={widgetData} />
              ) : null}
            </div>
            <div className="col-md-2">
              <StudentsList
                students={students}
                getStudentData={getStudentData}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MainComponent;
