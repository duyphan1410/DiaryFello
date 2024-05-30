import { firebase } from "@react-native-firebase/firestore";

const DiaryCollection = "Diary";

const DB = firebase.firestore();


// Function to insert a diary into the database
const insertDiary = (
  title,
  content,
  year,
  month,
  day,
  hour,
  minute,
  monthname,
  timestamp,
  userid
) => {
  return new Promise((resolve, reject) => {
    DB.collection(DiaryCollection).add({
      title: title,
      content: content,
      year: year,
      month: month,
      day: day,
      hour: hour,
      minute: minute,
      monthname: monthname,
      timestamp: timestamp,
      userid: userid
    })
      .then(() => { resolve() })
      .catch((e) => {
        console.log(e);
        reject();
      });
  });
};

const updateDiary = (id, title, content) => {
  return new Promise((resolve, reject) => {
    DB.collection(DiaryCollection).doc(id).update(
      {
        title: title,
        content: content
      }
    )
      .then(() => resolve())
      .catch((e) => reject(e))
  });
};

// Function to query all diaries from the database
const getAllDiaries = (year, monthname) => {
  return new Promise((resolve, reject) => {
    DB.collection(DiaryCollection)
      .where('year', '==', year)
      .where('monthname', '==', monthname)
      .get()
      .then((snapShotQuery) => {
        var diaryArr = [];
        snapShotQuery.forEach((doc) => {
          const data = doc.data();
          const { title, content, year, month, day, hour, minute, monthname, timestamp } = data;
          diaryArr.push({
            id: doc.id,
            title: title,
            content: content,
            year: year,
            month: month,
            day: day,
            hour: hour,
            minute: minute,
            monthname: monthname,
            timestamp: timestamp
          });
        });
        resolve(diaryArr);
      })
      .catch((e) => reject(e));
  });
};

//getDiary
const getDiary = (id) => {
  return new Promise((resolve, reject) => {
    DB.collection(DiaryCollection)
      .doc(id)
      .get()
      .then((item) => {
        resolve(item.data());
      })
      .catch((e) => reject(e));
  });
};

// Function to delete a diary from the database by ID
const deleteDiaryById = (id) => {
  return new Promise((resolve, reject) => {
    DB.collection(DiaryCollection).doc(id).delete().then(() => resolve()).catch((e) => reject(e));
  });
};

// Export the functions for use in other files
export {
  insertDiary,
  getAllDiaries,
  deleteDiaryById,
  getDiary,
  updateDiary,
};