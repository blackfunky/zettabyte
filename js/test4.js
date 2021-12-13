// Expected Result : 
// [
//   { name: 'Rahman', school_name: 'STJK' },
//   { name: 'Budi', school_name: 'STJK' }
// ]
// Direction :
// Return a formatted array for students of specific school using id of school.
const students = [
  {
    id: "1",
    name: "Ryan",
    school: {
      id: "1",
      short_name: "PLMK"
    },
  },
  {
    id: "2",
    name: "Ari",
    school: {
      id: "1",
      short_name: "PLMK"
    },
  },
  {
    id: "3",
    name: "Rahman",
    school: {
      id: "2",
      short_name: "STJK"
    },
  },
  {
    id: "4",
    name: "Budi",
    school: {
      id: "2",
      short_name: "STJK"
    },
  },
  {
    id: "5",
    name: "Jaka",
    school: {
      id: "1",
      short_name: "PLMK"
    },
  }
]
const schoolId = '2';

function result(students, schoolId) {
  
  let x = [];
  let i = 0;

  for(let j = 0; j < students.length; j++){

    if(students[j].school.id == schoolId){

      let data = [
        {  
          name: students[j].name, 
          school_name: students[j].school.short_name
        }
      ]

      x[i++] = data;
    }
  }

  return x;
}

console.log(result(students, schoolId));