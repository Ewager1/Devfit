import React, { useContext, useEffect, useState } from "react";
import Header from "../../components/commonComponents/header/header";
import Footer from "../../components/commonComponents/footer/footer";
import MemberInfoBox from "../../components/memberPageComponents/memberInfoBox/memberInfoBox";
import MeetYourTrainerBox from "../../components/memberPageComponents/meetYourTrainerBox/TrainerCarousel";
import MemberSchedule from "../../components/memberPageComponents/memberSchedule/memberSchedule";
import { add, format } from "date-fns";
import UserContext from "../../utilities/userContext";
import DevBtn from "../../components/commonComponents/devButton/devButton";
import IsShoppingContext from "../../utilities/isShoppingContext";
import { Redirect } from "react-router";
import UserInfoBox from "../../components/commonComponents/userInfoBox/userInfoBox";
import {
  addMemberToClass,
  getScheduleData,
  memberJoinedClasses,
  removeMemberFromClass,
} from "../../utilities/memberAPI/memberAPI";

function MemberPage() {
  const { setIsShopping } = useContext(IsShoppingContext);
  const [sendShop, setSendShop] = useState();
  const user = useContext(UserContext);
  const [userClasses, setUserClasses] = useState([]); //The classes the member is enrolled in the left column info box
  const [classSchedule, setClassSchedule] = useState([]); //all info for each class rendered in schedule
  const weekLength = [0, 1, 2, 3, 4, 5, 6];

  //fetches all the information needed to render a schedule and stores it in state.
  function fetchScheduleData() {
    getScheduleData().then((res) => {
      const weekArray = [];
      // eslint-disable-next-line
      weekLength.map((nothing, i) => {
        //Use date-fns to get classSchedule for the 7 days of the week
        const addDay = add(new Date(), {
          years: 0,
          months: 0,
          weeks: 0,
          days: i,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });

        //the date like Jan 23rd
        const calendarDate = format(addDay, "LLL, do");
        //day of week like "Monday"
        const dayOfWeek = format(addDay, "EEEE");

        //Filter the fetch request to only grab classes on the current day weeklength.map is iterating through
        const filteredData = res.filter((r) => {
          return r.day === dayOfWeek;
        });

        //create an object to store both the fns date classSchedule and the current day
        const dayObject = {
          date: calendarDate,
          weekDay: dayOfWeek,
          classData: filteredData,
        };

        //add that object to state
        weekArray.push(dayObject);
      });

      setClassSchedule(weekArray);
    });
  }

  function removeFromClass(classid) {
    let data = { id: classid, memberid: user._id };
    removeMemberFromClass(data).then(() => {
      fecthJoinedClasses();
    });
  }

  function addToClass(classid) {
    let data = { id: classid, memberid: user._id };
    addMemberToClass(data).then(() => {
      fecthJoinedClasses();
    });
  }

  function fecthJoinedClasses() {
    memberJoinedClasses(user._id).then((classesJoined) => {
      setUserClasses([...classesJoined]);
    });
  }

  useEffect(() => {
    fecthJoinedClasses();
    fetchScheduleData();
    // eslint-disable-next-line
  }, [user]);

  return (
    <>
      <Header />
      <DevBtn
        styleClass="btn-red mb-3"
        onClick={() => {
          setIsShopping(true);
          setSendShop(<Redirect to={`/member-store`} />);
        }}
      >
        Member Store
      </DevBtn>
      {sendShop ? sendShop : null}
      <UserInfoBox
        colLeft={<MemberInfoBox classesJoined={userClasses} />}
        colRight={<MeetYourTrainerBox />}
      ></UserInfoBox>
      <MemberSchedule
        classesJoined={userClasses}
        classSchedule={classSchedule}
        fetchScheduleData={() => fetchScheduleData()}
        joinClass={(e) => addToClass(e)}
        leaveClass={(e) => removeFromClass(e)}
      />
      <Footer />
    </>
  );
}

export default MemberPage;
