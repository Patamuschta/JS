function question(job) { 
  const jobDictionary = {
    developer: 'Что такое JS?',
    teacher: 'Какой предмет вы преподаете?',
    doctor: 'Кого вы лечите?',
  };

  return function(name) {
    return `${name}, ${jobDictionary[job]}?`;
  };
};

// const developerQuestion = question('developer');
// console.log(developerQuestion('Denis'));
// const teacherQuestion = question('teacher');
// console.log(teacherQuestion('Denis'));
const doctorQuestion = question('doctor');
console.log(doctorQuestion('Denis'));
