let current_week = 5
const modal = document.getElementById("modal");
const btn = document.getElementById("modal-btn");
const span = document.getElementsByClassName("close")[0];
const modalPicture = document.querySelector('.modal_pic')

const students = [
  {id: 1, name: 'Камышев Леонид', grade: 8, photo: './img/student_1.JPG'},
  {id: 2, name: 'Ланграф Семён', grade: 8, photo: './img/student_2.JPG'},
  {id: 3, name: 'Чери Игорь ', grade: 8, photo: './img/student_3.JPG'},
  {id: 4, name: 'Тихон Снитко', grade: 8, photo: './img/student_4.jpg'},
  {id: 5, name: 'Пустогачев Амат', grade: 8, photo: './img/chemistry.jpg'},
  {id: 6, name: 'Москаленко Сергей', grade: 8, photo: './img/student_6.JPG'},
]

const subjects = [
  {id: 1, name: 'Алгебра', code: 'math', badge: './img/math.png'},
  {id: 2, name: 'Геометрия', code: 'geometry', badge: './img/chemistry.jpg'},
  {id: 3, name: 'Русский язык', code: 'russian', badge: './img/chemistry.jpg'},
  {id: 4, name: 'Литература', code: 'literature', badge: './img/chemistry.jpg'},
  {id: 5, name: 'Английский', code: 'english', badge: './img/chemistry.jpg'},
  {id: 6, name: 'История', code: 'history', badge: './img/chemistry.jpg'},
  {id: 7, name: 'Общество', code: 'social_studies', badge: './img/chemistry.jpg'},
  {id: 8, name: 'Физика', code: 'phisics', badge: './img/chemistry.jpg'},
  {id: 9, name: 'ИЗО', code: 'art', badge: './img/chemistry.jpg'},
  {id: 10, name: 'Физ-ра', code: 'physical_culture', badge: './img/chemistry.jpg'},
  {id: 11, name: 'Химия', code: 'chemistry', badge: './img/chemistry.jpg'},
  {id: 12, name: 'География', code: 'geography', badge: './img/chemistry.jpg'},
  {id: 13, name: 'Биология', code: 'biology', badge: './img/chemistry.jpg'},
  {id: 14, name: 'ОБЖ', code: 'safe_science', badge: './img/chemistry.jpg'},
  {id: 15, name: 'Гео.Чукотки', code: 'chukotka', badge: './img/chemistry.jpg'},
  {id: 16, name: 'Информатика', code: 'informatics', badge: './img/chemistry.jpg'},
]




const results = [ // отчет недель будет идти с начала четверти

//algebra
  {student_id: 1, subject_id: 1, week: 2, mark: 3},
  {student_id: 1, subject_id: 1, week: 3, mark: 4},
  {student_id: 1, subject_id: 1, week: 4, mark: 4},
  {student_id: 1, subject_id: 1, week: 3, mark: 3},
  {student_id: 1, subject_id: 1, week: 5, mark: 4},
  {student_id: 2, subject_id: 1, week: 1, mark: 3},
  {student_id: 2, subject_id: 1, week: 3, mark: 3},
  {student_id: 2, subject_id: 1, week: 4, mark: 3},
  {student_id: 2, subject_id: 1, week: 4, mark: 3},
  {student_id: 2, subject_id: 1, week: 5, mark: 3},
  {student_id: 2, subject_id: 1, week: 6, mark: 3},
  {student_id: 3, subject_id: 1, week: 1, mark: 3},
  {student_id: 3, subject_id: 1, week: 2, mark: 4},
  {student_id: 3, subject_id: 1, week: 2, mark: 4},
  {student_id: 3, subject_id: 1, week: 3, mark: 3},
  {student_id: 3, subject_id: 1, week: 3, mark: 3},
  {student_id: 3, subject_id: 1, week: 4, mark: 3},
  {student_id: 3, subject_id: 1, week: 5, mark: 3},
  {student_id: 3, subject_id: 1, week: 5, mark: 4},
  {student_id: 3, subject_id: 1, week: 5, mark: 3},

  {student_id: 4, subject_id: 1, week: 2, mark: 4},
  {student_id: 4, subject_id: 1, week: 2, mark: 4},
  {student_id: 4, subject_id: 1, week: 3, mark: 4},
  {student_id: 4, subject_id: 1, week: 3, mark: 4},
  {student_id: 4, subject_id: 1, week: 4, mark: 3},
  {student_id: 4, subject_id: 1, week: 4, mark: 4},
  {student_id: 4, subject_id: 1, week: 5, mark: 3},
  {student_id: 4, subject_id: 1, week: 5, mark: 4},
  {student_id: 4, subject_id: 1, week: 6, mark: 4},
  

  {student_id: 5, subject_id: 1, week: 1, mark: 3},
  {student_id: 5, subject_id: 1, week: 2, mark: 4},
  {student_id: 5, subject_id: 1, week: 2, mark: 4},
  {student_id: 5, subject_id: 1, week: 3, mark: 3},
  {student_id: 5, subject_id: 1, week: 3, mark: 4},
  {student_id: 5, subject_id: 1, week: 4, mark: 3},
  {student_id: 5, subject_id: 1, week: 4, mark: 4},
  {student_id: 5, subject_id: 1, week: 6, mark: 4},
  {student_id: 5, subject_id: 1, week: 5, mark: 4},
  {student_id: 6, subject_id: 1, week: 1, mark: 4},
  {student_id: 6, subject_id: 1, week: 2, mark: 4},
  {student_id: 6, subject_id: 1, week: 2, mark: 4},
  {student_id: 6, subject_id: 1, week: 3, mark: 4},
  {student_id: 6, subject_id: 1, week: 3, mark: 4},
  {student_id: 6, subject_id: 1, week: 4, mark: 4},
  {student_id: 6, subject_id: 1, week: 5, mark: 4},
  {student_id: 6, subject_id: 1, week: 6, mark: 4},

  //geometry

  {student_id: 1, subject_id: 2, week: 1, mark: 3},
  {student_id: 1, subject_id: 2, week: 2, mark: 4},
  {student_id: 1, subject_id: 2, week: 2, mark: 4},
  {student_id: 1, subject_id: 2, week: 3, mark: 3},
  {student_id: 1, subject_id: 2, week: 5, mark: 4},
  {student_id: 1, subject_id: 2, week: 6, mark: 3},

  {student_id: 2, subject_id: 2, week: 3, mark: 3},
  {student_id: 2, subject_id: 2, week: 4, mark: 3},
  {student_id: 2, subject_id: 2, week: 5, mark: 3},
  {student_id: 2, subject_id: 2, week: 5, mark: 3},

  {student_id: 3, subject_id: 2, week: 2, mark: 3},
  {student_id: 3, subject_id: 2, week: 3, mark: 4},
  {student_id: 3, subject_id: 2, week: 4, mark: 4},
  {student_id: 3, subject_id: 2, week: 3, mark: 3},
  {student_id: 3, subject_id: 2, week: 5, mark: 3},
  {student_id: 3, subject_id: 2, week: 6, mark: 3},

  {student_id: 4, subject_id: 2, week: 2, mark: 4},
  {student_id: 4, subject_id: 2, week: 2, mark: 4},
  {student_id: 4, subject_id: 2, week: 2, mark: 3},
  {student_id: 4, subject_id: 2, week: 3, mark: 4},
  {student_id: 4, subject_id: 2, week: 4, mark: 4},
  {student_id: 4, subject_id: 2, week: 5, mark: 3},
  {student_id: 4, subject_id: 2, week: 5, mark: 4},
  {student_id: 4, subject_id: 2, week: 6, mark: 3},

  {student_id: 5, subject_id: 2, week: 2, mark: 3},
  {student_id: 5, subject_id: 2, week: 2, mark: 4},
  {student_id: 5, subject_id: 2, week: 3, mark: 3},
  {student_id: 5, subject_id: 2, week: 4, mark: 4},
  {student_id: 5, subject_id: 2, week: 4, mark: 4},
  {student_id: 5, subject_id: 2, week: 5, mark: 4},
  {student_id: 5, subject_id: 2, week: 6, mark: 4},

  {student_id: 6, subject_id: 2, week: 2, mark: 4},
  {student_id: 6, subject_id: 2, week: 2, mark: 5},
  {student_id: 6, subject_id: 2, week: 3, mark: 4},
  {student_id: 6, subject_id: 2, week: 3, mark: 4},
  {student_id: 6, subject_id: 2, week: 3, mark: 4},
  {student_id: 6, subject_id: 2, week: 5, mark: 4},
  {student_id: 6, subject_id: 2, week: 6, mark: 4},

  //russian
  {student_id: 1, subject_id: 3, week: 2, mark: 3},
  {student_id: 1, subject_id: 3, week: 2, mark: 3},
  {student_id: 1, subject_id: 3, week: 2, mark: 3},
  {student_id: 1, subject_id: 3, week: 3, mark: 3},
  {student_id: 1, subject_id: 3, week: 5, mark: 3},
  {student_id: 1, subject_id: 3, week: 5, mark: 4},
  {student_id: 1, subject_id: 3, week: 5, mark: 3},
  {student_id: 1, subject_id: 3, week: 6, mark: 3},

  {student_id: 2, subject_id: 3, week: 1, mark: 3},
  {student_id: 2, subject_id: 3, week: 3, mark: 3},
  {student_id: 2, subject_id: 3, week: 4, mark: 3},
  {student_id: 2, subject_id: 3, week: 5, mark: 2},
  {student_id: 2, subject_id: 3, week: 5, mark: 2},
  {student_id: 2, subject_id: 3, week: 5, mark: 3},
  

  {student_id: 3, subject_id: 3, week: 1, mark: 3},
  {student_id: 3, subject_id: 3, week: 2, mark: 3},
  {student_id: 3, subject_id: 3, week: 3, mark: 3},
  {student_id: 3, subject_id: 3, week: 3, mark: 4},
  {student_id: 3, subject_id: 3, week: 4, mark: 3},
  {student_id: 3, subject_id: 3, week: 4, mark: 3},
  {student_id: 3, subject_id: 3, week: 5, mark: 3},
  {student_id: 3, subject_id: 3, week: 5, mark: 3},
  {student_id: 3, subject_id: 3, week: 6, mark: 3},

  {student_id: 4, subject_id: 3, week: 1, mark: 4},
  {student_id: 4, subject_id: 3, week: 2, mark: 4},
  {student_id: 4, subject_id: 3, week: 2, mark: 4},
  {student_id: 4, subject_id: 3, week: 3, mark: 4},
  {student_id: 4, subject_id: 3, week: 4, mark: 4},
  {student_id: 4, subject_id: 3, week: 4, mark: 4},
  {student_id: 4, subject_id: 3, week: 5, mark: 3},
  {student_id: 4, subject_id: 3, week: 5, mark: 4},
  {student_id: 4, subject_id: 3, week: 5, mark: 4},
  {student_id: 4, subject_id: 3, week: 6, mark: 4},

  {student_id: 5, subject_id: 3, week: 2, mark: 3},
  {student_id: 5, subject_id: 3, week: 3, mark: 5},
  {student_id: 5, subject_id: 3, week: 4, mark: 3},
  {student_id: 5, subject_id: 3, week: 5, mark: 2},
  {student_id: 5, subject_id: 3, week: 5, mark: 2},
  {student_id: 5, subject_id: 3, week: 5, mark: 3},

  {student_id: 6, subject_id: 3, week: 1, mark: 4},
  {student_id: 6, subject_id: 3, week: 2, mark: 4},
  {student_id: 6, subject_id: 3, week: 3, mark: 4},
  {student_id: 6, subject_id: 3, week: 5, mark: 4},
  {student_id: 6, subject_id: 3, week: 5, mark: 4},
  {student_id: 6, subject_id: 3, week: 6, mark: 4},


//literature 

{student_id: 1, subject_id: 4, week: 2, mark: 4},
{student_id: 1, subject_id: 4, week: 3, mark: 4},
{student_id: 1, subject_id: 4, week: 4, mark: 3},

{student_id: 2, subject_id: 4, week: 1, mark: 3},
{student_id: 2, subject_id: 4, week: 3, mark: 2},
{student_id: 2, subject_id: 4, week: 4, mark: 3},
{student_id: 2, subject_id: 4, week: 4, mark: 3},

{student_id: 3, subject_id: 4, week: 2, mark: 2},
{student_id: 3, subject_id: 4, week: 3, mark: 2},
{student_id: 4, subject_id: 4, week: 1, mark: 4},
{student_id: 4, subject_id: 4, week: 2, mark: 4},
{student_id: 4, subject_id: 4, week: 3, mark: 4},
{student_id: 4, subject_id: 4, week: 4, mark: 4},

{student_id: 5, subject_id: 4, week: 1, mark: 4},
{student_id: 5, subject_id: 4, week: 2, mark: 4},
{student_id: 5, subject_id: 4, week: 3, mark: 5},
{student_id: 5, subject_id: 4, week: 4, mark: 4},

{student_id: 6, subject_id: 4, week: 1, mark: 4},
{student_id: 6, subject_id: 4, week: 2, mark: 4},
{student_id: 6, subject_id: 4, week: 3, mark: 5},

//english 

{student_id: 1, subject_id: 5, week: 1, mark: 5},
{student_id: 1, subject_id: 5, week: 2, mark: 4},
{student_id: 1, subject_id: 5, week: 4, mark: 3},
{student_id: 1, subject_id: 5, week: 5, mark: 4},
{student_id: 1, subject_id: 5, week: 5, mark: 5},
{student_id: 1, subject_id: 5, week: 6, mark: 4},

{student_id: 2, subject_id: 5, week: 3, mark: 2},
{student_id: 2, subject_id: 5, week: 4, mark: 2},
{student_id: 2, subject_id: 5, week: 4, mark: 2},
{student_id: 2, subject_id: 5, week: 5, mark: 4},
{student_id: 2, subject_id: 5, week: 5, mark: 3},
{student_id: 2, subject_id: 5, week: 6, mark: 2},


{student_id: 3, subject_id: 5, week: 2, mark: 4},
{student_id: 3, subject_id: 5, week: 3, mark: 2},
{student_id: 3, subject_id: 5, week: 4, mark: 3},
{student_id: 3, subject_id: 5, week: 5, mark: 4},
{student_id: 3, subject_id: 5, week: 5, mark: 3},
{student_id: 3, subject_id: 5, week: 6, mark: 3},

{student_id: 4, subject_id: 5, week: 1, mark: 4},
{student_id: 4, subject_id: 5, week: 2, mark: 5},
{student_id: 4, subject_id: 5, week: 3, mark: 4},
{student_id: 4, subject_id: 5, week: 4, mark: 5},
{student_id: 4, subject_id: 5, week: 4, mark: 5},
{student_id: 4, subject_id: 5, week: 5, mark: 4},
{student_id: 4, subject_id: 5, week: 5, mark: 4},
{student_id: 4, subject_id: 5, week: 6, mark: 4},

{student_id: 5, subject_id: 5, week: 1, mark: 4},
{student_id: 5, subject_id: 5, week: 2, mark: 3},
{student_id: 5, subject_id: 5, week: 3, mark: 3},
{student_id: 5, subject_id: 5, week: 4, mark: 3},
{student_id: 5, subject_id: 5, week: 5, mark: 4},
{student_id: 5, subject_id: 5, week: 6, mark: 3},

{student_id: 6, subject_id: 5, week: 1, mark: 4},
{student_id: 6, subject_id: 5, week: 2, mark: 5},
{student_id: 6, subject_id: 5, week: 3, mark: 4},
{student_id: 6, subject_id: 5, week: 4, mark: 5},
{student_id: 6, subject_id: 5, week: 5, mark: 5},
{student_id: 6, subject_id: 5, week: 5, mark: 5},
{student_id: 6, subject_id: 5, week: 6, mark: 4},

//history

{student_id: 1, subject_id: 6, week: 1, mark: 5},
{student_id: 1, subject_id: 6, week: 2, mark: 4},
{student_id: 1, subject_id: 6, week: 3, mark: 4},
{student_id: 1, subject_id: 6, week: 5, mark: 5},
{student_id: 1, subject_id: 6, week: 5, mark: 4},
{student_id: 1, subject_id: 6, week: 6, mark: 4},

{student_id: 2, subject_id: 6, week: 4, mark: 3},
{student_id: 2, subject_id: 6, week: 5, mark: 3},
{student_id: 2, subject_id: 6, week: 5, mark: 4},
{student_id: 2, subject_id: 6, week: 6, mark: 3},

{student_id: 3, subject_id: 6, week: 2, mark: 3},
{student_id: 3, subject_id: 6, week: 3, mark: 3},
{student_id: 3, subject_id: 6, week: 5, mark: 4},
{student_id: 3, subject_id: 6, week: 5, mark: 5},
{student_id: 3, subject_id: 6, week: 6, mark: 3},

{student_id: 4, subject_id: 6, week: 2, mark: 4},
{student_id: 4, subject_id: 6, week: 3, mark: 4},
{student_id: 4, subject_id: 6, week: 4, mark: 4},
{student_id: 4, subject_id: 6, week: 5, mark: 4},
{student_id: 4, subject_id: 6, week: 5, mark: 4},
{student_id: 4, subject_id: 6, week: 6, mark: 4},

{student_id: 5, subject_id: 6, week: 2, mark: 4},
{student_id: 5, subject_id: 6, week: 3, mark: 4},
{student_id: 5, subject_id: 6, week: 4, mark: 3},
{student_id: 5, subject_id: 6, week: 3, mark: 4},
{student_id: 5, subject_id: 6, week: 5, mark: 4},
{student_id: 5, subject_id: 6, week: 5, mark: 4},
{student_id: 5, subject_id: 6, week: 6, mark: 5},

{student_id: 6, subject_id: 6, week: 2, mark: 4},
{student_id: 6, subject_id: 6, week: 3, mark: 4},
{student_id: 6, subject_id: 6, week: 5, mark: 4},
{student_id: 6, subject_id: 6, week: 5, mark: 4},
{student_id: 6, subject_id: 6, week: 6, mark: 5},

//social science

{student_id: 1, subject_id: 7, week: 1, mark: 4},
{student_id: 1, subject_id: 7, week: 2, mark: 4},
{student_id: 1, subject_id: 7, week: 3, mark: 5},

{student_id: 2, subject_id: 7, week: 1, mark: 4},
{student_id: 2, subject_id: 7, week: 3, mark: 3},
{student_id: 2, subject_id: 7, week: 4, mark: 3},

{student_id: 3, subject_id: 7, week: 1, mark: 4},
{student_id: 3, subject_id: 7, week: 2, mark: 4},
{student_id: 3, subject_id: 7, week: 3, mark: 3},
{student_id: 3, subject_id: 7, week: 4, mark: 4},

{student_id: 4, subject_id: 7, week: 1, mark: 4},
{student_id: 4, subject_id: 7, week: 3, mark: 4},
{student_id: 4, subject_id: 7, week: 4, mark: 5},

{student_id: 5, subject_id: 7, week: 1, mark: 4},
{student_id: 5, subject_id: 7, week: 2, mark: 4},
{student_id: 5, subject_id: 7, week: 3, mark: 4},
{student_id: 5, subject_id: 7, week: 4, mark: 4},

{student_id: 6, subject_id: 7, week: 1, mark: 4},
{student_id: 6, subject_id: 7, week: 2, mark: 4},
{student_id: 6, subject_id: 7, week: 3, mark: 5},
{student_id: 6, subject_id: 7, week: 4, mark: 4},


//phisics

{student_id: 1, subject_id: 8, week: 1, mark: 3},
{student_id: 1, subject_id: 8, week: 2, mark: 4},
{student_id: 1, subject_id: 8, week: 2, mark: 5},
{student_id: 1, subject_id: 8, week: 4, mark: 3},
{student_id: 1, subject_id: 8, week: 5, mark: 4},
{student_id: 1, subject_id: 8, week: 6, mark: 4},
{student_id: 1, subject_id: 8, week: 6, mark: 4},

{student_id: 2, subject_id: 8, week: 1, mark: 3},
{student_id: 2, subject_id: 8, week: 3, mark: 3},
{student_id: 2, subject_id: 8, week: 3, mark: 3},
{student_id: 2, subject_id: 8, week: 4, mark: 3},
{student_id: 2, subject_id: 8, week: 5, mark: 3},
{student_id: 2, subject_id: 8, week: 5, mark: 3},
{student_id: 2, subject_id: 8, week: 6, mark: 4},

{student_id: 3, subject_id: 8, week: 1, mark: 3},
{student_id: 3, subject_id: 8, week: 2, mark: 4},
{student_id: 3, subject_id: 8, week: 3, mark: 3},
{student_id: 3, subject_id: 8, week: 3, mark: 4},
{student_id: 3, subject_id: 8, week: 4, mark: 4},
{student_id: 3, subject_id: 8, week: 5, mark: 3},
{student_id: 3, subject_id: 8, week: 5, mark: 4},
{student_id: 3, subject_id: 8, week: 6, mark: 4},

{student_id: 4, subject_id: 8, week: 1, mark: 4},
{student_id: 4, subject_id: 8, week: 2, mark: 4},
{student_id: 4, subject_id: 8, week: 2, mark: 5},
{student_id: 4, subject_id: 8, week: 3, mark: 4},
{student_id: 4, subject_id: 8, week: 4, mark: 3},
{student_id: 4, subject_id: 8, week: 5, mark: 3},
{student_id: 4, subject_id: 8, week: 5, mark: 3},
{student_id: 4, subject_id: 8, week: 6, mark: 4},

{student_id: 5, subject_id: 8, week: 1, mark: 3},
{student_id: 5, subject_id: 8, week: 2, mark: 4},
{student_id: 5, subject_id: 8, week: 2, mark: 5},
{student_id: 5, subject_id: 8, week: 3, mark: 4},
{student_id: 5, subject_id: 8, week: 3, mark: 4},
{student_id: 5, subject_id: 8, week: 4, mark: 4},
{student_id: 5, subject_id: 8, week: 5, mark: 4},
{student_id: 5, subject_id: 8, week: 6, mark: 4},

{student_id: 6, subject_id: 8, week: 1, mark: 5},
{student_id: 6, subject_id: 8, week: 2, mark: 4},
{student_id: 6, subject_id: 8, week: 2, mark: 5},
{student_id: 6, subject_id: 8, week: 3, mark: 4},
{student_id: 6, subject_id: 8, week: 4, mark: 4},
{student_id: 6, subject_id: 8, week: 5, mark: 4},
{student_id: 6, subject_id: 8, week: 5, mark: 5},
{student_id: 6, subject_id: 8, week: 6, mark: 4},

//art

{student_id: 1, subject_id: 9, week: 2, mark: 5},
{student_id: 1, subject_id: 9, week: 3, mark: 4},

{student_id: 2, subject_id: 9, week: 2, mark: 4},
{student_id: 2, subject_id: 9, week: 4, mark: 4},

{student_id: 3, subject_id: 9, week: 2, mark: 4},
{student_id: 3, subject_id: 9, week: 3, mark: 4},
{student_id: 3, subject_id: 9, week: 4, mark: 4},

{student_id: 4, subject_id: 9, week: 2, mark: 5},
{student_id: 4, subject_id: 9, week: 3, mark: 4},
{student_id: 4, subject_id: 9, week: 4, mark: 4},

{student_id: 5, subject_id: 9, week: 2, mark: 4},
{student_id: 5, subject_id: 9, week: 3, mark: 4},
{student_id: 5, subject_id: 9, week: 4, mark: 4},

{student_id: 6, subject_id: 9, week: 2, mark: 4},
{student_id: 6, subject_id: 9, week: 4, mark: 5},


//phisical culture

{student_id: 1, subject_id: 10, week: 1, mark: 5},
{student_id: 1, subject_id: 10, week: 2, mark: 5},
{student_id: 1, subject_id: 10, week: 3, mark: 5},

{student_id: 2, subject_id: 10, week: 1, mark: 5},

{student_id: 3, subject_id: 10, week: 1, mark: 5},
{student_id: 3, subject_id: 10, week: 2, mark: 5},
{student_id: 3, subject_id: 10, week: 3, mark: 5},

{student_id: 4, subject_id: 10, week: 1, mark: 5},
{student_id: 4, subject_id: 10, week: 2, mark: 5},
{student_id: 4, subject_id: 10, week: 3, mark: 5},

{student_id: 5, subject_id: 10, week: 2, mark: 5},
{student_id: 5, subject_id: 10, week: 3, mark: 5},


{student_id: 6, subject_id: 10, week: 1, mark: 5},
{student_id: 6, subject_id: 10, week: 2, mark: 5},
{student_id: 6, subject_id: 10, week: 3, mark: 5},

//chemistry


{student_id: 1, subject_id: 11, week: 2, mark: 3},
{student_id: 1, subject_id: 11, week: 3, mark: 3},
{student_id: 1, subject_id: 11, week: 5, mark: 3},
{student_id: 1, subject_id: 11, week: 5, mark: 3},

{student_id: 2, subject_id: 11, week: 4, mark: 3},
{student_id: 2, subject_id: 11, week: 5, mark: 2},
{student_id: 2, subject_id: 11, week: 5, mark: 2},

{student_id: 3, subject_id: 11, week: 2, mark: 3},
{student_id: 3, subject_id: 11, week: 3, mark: 3},
{student_id: 3, subject_id: 11, week: 4, mark: 3},
{student_id: 3, subject_id: 11, week: 4, mark: 3},
{student_id: 3, subject_id: 11, week: 5, mark: 2},
{student_id: 3, subject_id: 11, week: 5, mark: 2},

{student_id: 4, subject_id: 11, week: 2, mark: 4},
{student_id: 4, subject_id: 11, week: 3, mark: 3},
{student_id: 4, subject_id: 11, week: 3, mark: 4},
{student_id: 4, subject_id: 11, week: 4, mark: 4},
{student_id: 4, subject_id: 11, week: 5, mark: 4},
{student_id: 4, subject_id: 11, week: 5, mark: 4},

{student_id: 5, subject_id: 11, week: 3, mark: 3},
{student_id: 5, subject_id: 11, week: 3, mark: 3},
{student_id: 5, subject_id: 11, week: 5, mark: 2},

{student_id: 6, subject_id: 11, week: 2, mark: 5},
{student_id: 6, subject_id: 11, week: 3, mark: 4},
{student_id: 6, subject_id: 11, week: 3, mark: 5},
{student_id: 6, subject_id: 11, week: 4, mark: 4},
{student_id: 6, subject_id: 11, week: 5, mark: 5},
{student_id: 6, subject_id: 11, week: 5, mark: 4},

//biology

{student_id: 1, subject_id: 13, week: 2, mark: 3},
{student_id: 1, subject_id: 13, week: 2, mark: 3},
{student_id: 1, subject_id: 13, week: 3, mark: 3},
{student_id: 1, subject_id: 13, week: 5, mark: 4},
{student_id: 1, subject_id: 13, week: 6, mark: 5},

{student_id: 2, subject_id: 13, week: 4, mark: 3},
{student_id: 2, subject_id: 13, week: 3, mark: 4},

{student_id: 3, subject_id: 13, week: 2, mark: 3},
{student_id: 3, subject_id: 13, week: 2, mark: 3},
{student_id: 3, subject_id: 13, week: 3, mark: 3},
{student_id: 3, subject_id: 13, week: 4, mark: 3},
{student_id: 3, subject_id: 13, week: 5, mark: 3},


{student_id: 4, subject_id: 13, week: 2, mark: 3},
{student_id: 4, subject_id: 13, week: 2, mark: 4},
{student_id: 4, subject_id: 12, week: 3, mark: 4},
{student_id: 4, subject_id: 13, week: 4, mark: 4},
{student_id: 4, subject_id: 13, week: 5, mark: 4},
{student_id: 4, subject_id: 13, week: 5, mark: 4},

{student_id: 5, subject_id: 13, week: 2, mark: 3},
{student_id: 5, subject_id: 13, week: 2, mark: 3},
{student_id: 5, subject_id: 13, week: 3, mark: 5},
{student_id: 5, subject_id: 13, week: 4, mark: 4},
{student_id: 5, subject_id: 13, week: 5, mark: 4},
{student_id: 5, subject_id: 13, week: 6, mark: 5},

{student_id: 6, subject_id: 13, week: 2, mark: 3},
{student_id: 6, subject_id: 13, week: 2, mark: 3},
{student_id: 6, subject_id: 13, week: 3, mark: 4},
{student_id: 6, subject_id: 13, week: 4, mark: 3},

//geography

{student_id: 1, subject_id: 12, week: 2, mark: 3},
{student_id: 1, subject_id: 12, week: 2, mark: 3},
{student_id: 1, subject_id: 12, week: 3, mark: 4},
{student_id: 1, subject_id: 12, week: 5, mark: 4},

{student_id: 2, subject_id: 12, week: 4, mark: 2},
{student_id: 2, subject_id: 12, week: 6, mark: 3},
{student_id: 2, subject_id: 12, week: 6, mark: 2},

{student_id: 3, subject_id: 12, week: 2, mark: 2},
{student_id: 3, subject_id: 12, week: 2, mark: 3},
{student_id: 3, subject_id: 12, week: 3, mark: 3},
{student_id: 3, subject_id: 12, week: 4, mark: 4},
{student_id: 3, subject_id: 12, week: 4, mark: 3},
{student_id: 3, subject_id: 12, week: 5, mark: 3},
{student_id: 3, subject_id: 12, week: 6, mark: 4},


{student_id: 4, subject_id: 12, week: 2, mark: 3},
{student_id: 4, subject_id: 12, week: 2, mark: 4},
{student_id: 4, subject_id: 12, week: 3, mark: 4},
{student_id: 4, subject_id: 12, week: 4, mark: 4},
{student_id: 4, subject_id: 12, week: 4, mark: 3},
{student_id: 4, subject_id: 12, week: 5, mark: 5},
{student_id: 4, subject_id: 12, week: 5, mark: 4},

{student_id: 5, subject_id: 12, week: 2, mark: 3},
{student_id: 5, subject_id: 12, week: 2, mark: 3},
{student_id: 5, subject_id: 12, week: 3, mark: 3},
{student_id: 5, subject_id: 12, week: 4, mark: 4},
{student_id: 5, subject_id: 12, week: 4, mark: 3},
{student_id: 5, subject_id: 12, week: 6, mark: 4},

{student_id: 6, subject_id: 12, week: 2, mark: 3},
{student_id: 6, subject_id: 12, week: 2, mark: 3},
{student_id: 6, subject_id: 12, week: 3, mark: 3},
{student_id: 6, subject_id: 12, week: 4, mark: 3},
{student_id: 6, subject_id: 12, week: 6, mark: 5},

//safe science

{student_id: 1, subject_id: 14, week: 1, mark: 5},
{student_id: 1, subject_id: 14, week: 2, mark: 5},
{student_id: 1, subject_id: 14, week: 3, mark: 4},
{student_id: 1, subject_id: 14, week: 5, mark: 3},

{student_id: 2, subject_id: 14, week: 1, mark: 4},
{student_id: 2, subject_id: 14, week: 3, mark: 4},
{student_id: 2, subject_id: 14, week: 4, mark: 4},
{student_id: 2, subject_id: 14, week: 5, mark: 3},

{student_id: 3, subject_id: 14, week: 1, mark: 4},
{student_id: 3, subject_id: 14, week: 2, mark: 5},
{student_id: 3, subject_id: 14, week: 3, mark: 4},
{student_id: 3, subject_id: 14, week: 4, mark: 5},
{student_id: 3, subject_id: 14, week: 5, mark: 3},

{student_id: 4, subject_id: 14, week: 1, mark: 5},
{student_id: 4, subject_id: 14, week: 2, mark: 4},
{student_id: 4, subject_id: 14, week: 3, mark: 4},
{student_id: 4, subject_id: 14, week: 4, mark: 5},
{student_id: 4, subject_id: 14, week: 4, mark: 5},
{student_id: 4, subject_id: 14, week: 5, mark: 3},


{student_id: 5, subject_id: 14, week: 1, mark: 4},
{student_id: 5, subject_id: 14, week: 2, mark: 5},
{student_id: 5, subject_id: 14, week: 3, mark: 4},
{student_id: 5, subject_id: 14, week: 4, mark: 5},
{student_id: 5, subject_id: 14, week: 5, mark: 4},

{student_id: 6, subject_id: 14, week: 1, mark: 5},
{student_id: 6, subject_id: 14, week: 2, mark: 5},
{student_id: 6, subject_id: 14, week: 3, mark: 4},
{student_id: 6, subject_id: 14, week: 4, mark: 4},
{student_id: 6, subject_id: 14, week: 5, mark: 4},

//chukotka
{student_id: 1, subject_id: 15, week: 5, mark:5},

{student_id: 2, subject_id: 15, week: 3, mark:3},
{student_id: 2, subject_id: 15, week: 5, mark:4},

{student_id: 3, subject_id: 15, week: 3, mark:3},
{student_id: 3, subject_id: 15, week: 5, mark:4},

{student_id: 4, subject_id: 15, week: 3, mark:3},
{student_id: 4, subject_id: 15, week: 5, mark:5},

{student_id: 5, subject_id: 15, week: 3, mark:3},


{student_id: 6, subject_id: 15, week: 3, mark:3},
{student_id: 6, subject_id: 15, week: 5, mark:5},


//informatics

{student_id: 1, subject_id: 16, week: 1, mark: 5},
{student_id: 1, subject_id: 16, week: 2, mark: 5},
{student_id: 1, subject_id: 16, week: 3, mark: 4},

{student_id: 2, subject_id: 16, week: 1, mark: 4},
{student_id: 2, subject_id: 16, week: 3, mark: 4},
{student_id: 2, subject_id: 16, week: 4, mark: 4},

{student_id: 3, subject_id: 16, week: 2, mark: 4},
{student_id: 3, subject_id: 16, week: 3, mark: 4},
{student_id: 3, subject_id: 16, week: 4, mark: 4},

{student_id: 4, subject_id: 16, week: 1, mark: 4},
{student_id: 4, subject_id: 16, week: 2, mark: 5},
{student_id: 4, subject_id: 16, week: 3, mark: 4},

{student_id: 5, subject_id: 16, week: 1, mark: 4},
{student_id: 5, subject_id: 16, week: 2, mark: 5},
{student_id: 5, subject_id: 16, week: 3, mark: 4},
{student_id: 5, subject_id: 16, week: 4, mark: 4},

{student_id: 6, subject_id: 16, week: 1, mark: 4},
{student_id: 6, subject_id: 16, week: 2, mark: 5},
{student_id: 6, subject_id: 16, week: 3, mark: 4},




]




const sumBy = (student_id, subject_id) => {
  return results.filter(f => f.student_id === student_id && f.subject_id === subject_id)
}



const sumByStudent = (student_id) => (subject_id) => {
  return results.filter(f => f.student_id === student_id && f.subject_id === subject_id)
}


const approximateMarksByStudents = (student_id) => {
  return results.reduce((prev, result) => {
    if(result.student_id === student_id) {
      if(result.mark === 2) {
        return prev - 2
      }
      if(result.mark === 3) {
        return prev
      }
      return result.mark + prev
    } else {
      return prev
    }
  }, 0)
}


const approximateMarksByWeek = (student_id, week) => {
  return results.reduce((prev, result) => {
    if(result.student_id === student_id && result.week === week) {
      if(result.mark === 2) {
        return prev - 2
      }
      if(result.mark === 3) {
        return prev
      }
      return result.mark + prev;
    } else {
      return prev;
    }
  }, 0);
};


for (let studentId = 1; studentId <= 6; studentId++) {
  const weekSum = results
    .filter(result => result.student_id === studentId && result.week === current_week)
    .reduce((total, result) => total + result.mark, 0);
}





const giveBadgesForStudents = (student_id) => {
  const badgeList = []
  results.forEach((result) => {
    if(result.student_id === student_id) {
      if(result.mark === 5 && !badgeList.includes(result.subject_id)) {
        badgeList.push(result.subject_id)
      }
    }
  })

  return badgeList
}


const renderStudents = () => {
  const table = document.createElement('table')
  const thead = document.querySelector('thead')

  const tableList = document.createElement('tr')
  const subject_list = document.createElement('th')

  const tablePhotos = document.createElement('tr')
  const firstTD = document.createElement('td')
  const player_1 = document.createElement('td')
  const player_2 = document.createElement('td')
  const player_3 = document.createElement('td')
  const player_4 = document.createElement('td')
  const player_5 = document.createElement('td')
  const player_6 = document.createElement('td')
 

  const tbody = document.querySelector('tbody')
  const week_achivements = document.createElement('tr')

  const total_score = document.createElement('tr')
  const winner_photo = document.createElement('div')


  tableList.classList.add('table_list')

  subject_list.classList.add('table_list')

  

  player_1.classList.add('player_img1')
  player_2.classList.add('player_img2')
  player_3.classList.add('player_img3')
  player_4.classList.add('player_img4')
  player_5.classList.add('player_img5')
  player_6.classList.add('player_img6')

  

  week_achivements.classList.add('weekAchivements')

  total_score.classList.add('total_score')
  winner_photo.classList.add('winner_photo')



  firstTD.textContent = "Предметы"

  week_achivements.textContent = "Оценки"
  total_score.textContent = "Итого"

  
  const body = document.getElementById('body')

  const emptyTh = document.createElement('th')
  tableList.append(emptyTh)

  const badgeTr = document.createElement('tr')
  badgeTr.append(document.createElement('td'))
  const achievementsList = []
  const badgeList = []
  const weekList = []
  let winner = {student_id: 0, score: 0}
  let secondPlace = {student_id: null, score: 0}
  
  
  students.forEach(student => {
    const studentScore = approximateMarksByStudents(student.id)
    const studentBadges = giveBadgesForStudents(student.id)
    const studentWeekScore = approximateMarksByWeek(student.id)
    if (studentScore > winner.score) {
      secondPlace = winner;
      winner = { student_id: student.id, score: studentScore };
    } else if (studentScore > secondPlace.score) {
      secondPlace = { student_id: student.id, score: studentScore };
    }
  
  
  console.log('Winner: ', winner);
  console.log('Second place: ', secondPlace);

    achievementsList.push({student_id: student.id, score: studentScore})
    weekList.push({student_id: student.id, score: studentWeekScore})
    badgeList.push({student_id: student.id, badges: studentBadges})

    const TDbages = document.createElement('td')
    TDbages.classList.add('TDbages')
    TDbages.classList.add('TDbages_' + student.id)
    badgeTr.append(TDbages)
  })

  const winnerImg = document.createElement('img')
  winnerImg.setAttribute('src', students.find(f => f.id === winner.student_id).photo)
  modalPicture.append(winnerImg)


  
  modalPicture.classList.add('modalPicture')
 

  btn.onclick = function() {
    modal.style.display = "block";
  }
  
  span.onclick = function() {
    modal.style.display = "none";
  }
  
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }


  subjects.forEach(subject => {
    const tr = document.createElement('tr')
    tr.classList.add(subject.code)
    tr.textContent = subject.name


    students.forEach(student => {
      const td = document.createElement('td')

      results.forEach(result => {
        if(result.subject_id === subject.id && result.student_id === student.id  && result.week === result.week){
          if(result.week === current_week) {
          const span = document.createElement('span')
          tr.addEventListener('click', () => {
            span.textContent = result.mark
          })
          td.append(span)
        }
      }

        if(result.mark === 5) {

        }
      })

      tr.append(td)
    })


    tbody.append(tr)
  })

  tableList.append(subject_list)
  thead.append(tableList, tablePhotos, badgeTr)
  tbody.append(week_achivements, total_score)
  thead.appendChild(tableList)

  tablePhotos.append(firstTD, player_1, player_2,player_3, player_4, player_5, player_6)
  

  

  achievementsList.forEach(achievement => {
    const student_achievement = document.createElement('td')
    student_achievement.classList.add('studen1_achivement')
    total_score.addEventListener('click', () => {
    student_achievement.textContent = achievement.score
    total_score.append(student_achievement)
  })
})

  
  

  const week = current_week ;

for (let student_id = 1; student_id <= 6; student_id++) {
  const td = document.createElement('td');
  week_achivements.addEventListener('click', () => {
  td.textContent = approximateMarksByWeek(student_id, week);
  week_achivements.appendChild(td);
})
}
    



  badgeList.forEach(student => {
    const badgePlace = document.getElementsByClassName('TDbages_' + student.student_id)[0]
    student.badges.forEach(badgeItem => {
      const badgeImg = document.createElement('img')
      badgeImg.classList.add('chemistry_badge')
      badgeImg.setAttribute('src', subjects.find(f => f.id === badgeItem).badge)
      badgePlace.append(badgeImg)
    })
  })

  body.append(table, winner_photo);
}

renderStudents()