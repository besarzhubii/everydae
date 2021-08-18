import "./StudentList.scss";

const StudentsList = (props) => {
  const { students, getStudentData } = props;
  return (
    <div className="studentListHolder">
      <span className="helloText">Childrens</span>
      <ul className="studentList">
        {students?.length > 0
          ? students?.map((el, key) => {
              return (
                <li
                  className="singleStudent"
                  key={key}
                  onClick={() =>
                    getStudentData(el.id, `${el.fname} ${el.lname}`)
                  }
                >{`${el.fname} ${el.lname}`}</li>
              );
            })
          : "No students found"}
      </ul>
    </div>
  );
};

export default StudentsList;
