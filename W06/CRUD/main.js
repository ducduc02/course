var courses = [
    {
        name: 'Javascript',
        des: 'Khoá học JS cơ bản',
        price : 1000  
    },{
        name: 'HTML',
        des: 'Khoá học HTML cơ bản',
        price: 800
    },
    {
        name: 'CSS',
        des: 'Khoá học CSS cơ bản',
        price: 700
    }
]

function renderCourses() {
    var listCoursesBlock = document.getElementById('list-courses')

    var htmls= courses.map((course,index) => {
        return `
            <li>
                <h1>Tên Khóa Học: ${course.name}</h1>
                <p>Mô tả: ${course.des}</p>
                <p>Giá: ${course.price}</p>
                <button onclick="editCourse(${index})">Sửa</button>
                <button onclick="deleteCourse(${index})">Xóa</button>
            </li>
        `
    })

    listCoursesBlock.innerHTML = htmls.join('')
}
renderCourses()

function addCourse() {
    var courseName = document.getElementById('courseName').value
    var courseDes = document.getElementById('courseDes').value
    var coursePrice = document.getElementById('coursePrice').value

    if (courseName !== '') {
        courses.push({
            name: courseName,
            des: courseDes,
            price: coursePrice
        });
        renderCourses()
        document.getElementById('courseName').value = ''
        document.getElementById('courseDes').value = ''
        document.getElementById('coursePrice').value = ''
    }
}

function editCourse(index) {
    var course = courses[index];
    document.getElementById('courseName').value = course.name
    document.getElementById('courseDes').value = course.des
    document.getElementById('coursePrice').value = course.price

    document.getElementById('btn-update').style.display = 'block';
    document.getElementById('btn-cancel').style.display = 'block';
    document.getElementById('btn-add').style.display = 'none';

    var editElement = document.querySelector("#btn-update");
    var cancelElement = document.querySelector("#btn-cancel");


    editElement.onclick = function () {
        var dataEditedSaveChange = {
            name: document.getElementById('courseName').value,
            des: document.getElementById('courseDes').value,
            price: document.getElementById('coursePrice').value,
        };

        courses[index] = dataEditedSaveChange;

        renderCourses();
    }
    cancelElement.onclick = function () {
        document.getElementById('courseName').value = ''
        document.getElementById('courseDes').value = ''
        document.getElementById('coursePrice').value = ''

        document.getElementById('btn-update').style.display = 'none';
        document.getElementById('btn-cancel').style.display = 'none';
        document.getElementById('btn-add').style.display = 'block';
    }
}

function deleteCourse(index) {
    var confirmed= confirm("Bạn có chắc muốn xóa khóa học này?");

    if (confirmed) {
        courses.splice(index, 1);
        renderCourses();
    }
}

