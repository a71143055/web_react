import React from 'react';

const students = [
    {id: 1, name: "윤이나", grade: 3, major: "컴퓨터공학", avatar: "https://randomuser.me/api/portraits/men/1.jpg"},
    {id: 2, name: "박지영", grade: 2, major: "경영학", avatar: "https://randomuser.me/api/portraits/women/2.jpg"},
    {id: 3, name: "이예원", grade: 4, major: "물리학", avatar: "https://randomuser.me/api/portraits/men/3.jpg"},
    {id: 4, name: "황유민", grade: 1, major: "화학", avatar: "https://randomuser.me/api/portraits/women/4.jpg"},
    {id: 5, name: "박현경", grade: 3, major: "국문학", avatar: "https://randomuser.me/api/portraits/men/5.jpg"},
    {id: 6, name: "이동윤", grade: 2, major: "AISW", avatar: "https://randomuser.me/api/portraits/women/6.jpg"},
    {id: 7, name: "장원영", grade: 1, major: "컴퓨터공학", avatar: "https://randomuser.me/api/portraits/women/7.jpg"},
    {id: 8, name: "안유진", grade: 1, major: "체육학", avatar: "https://randomuser.me/api/portraits/women/8.jpg"}
];

function AttendanceCard() {
    return(
        <div>
            <h2>학생 출석부</h2>
            <div>
                {students.map((student) => (
                    <div key={student.id}>
                        <img src={student.avatar} alt={student.name}/>
                        <div>
                            <h3>{student.name}</h3>
                            <p>{student.grade}학년 | {student.major}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default AttendanceCard;