import React from 'react';
import './AttendanceCard.css'
import img1 from './img1.jfif'

const students = [
    {id: 1, name: "윤이나", grade: 3, major: "컴퓨터공학", avatar: img1},
    {id: 2, name: "박지영", grade: 2, major: "경영학", avatar: "https://randomuser.me/api/portraits/women/2.jpg"},
    {id: 3, name: "이예원", grade: 4, major: "물리학", avatar: "https://randomuser.me/api/portraits/men/3.jpg"},
    {id: 4, name: "황유민", grade: 1, major: "화학", avatar: "https://randomuser.me/api/portraits/women/4.jpg"},
    {id: 5, name: "박현경", grade: 3, major: "국문학", avatar: "https://randomuser.me/api/portraits/men/5.jpg"},
    {id: 6, name: "이동윤", grade: 2, major: "AISW", avatar: "https://randomuser.me/api/portraits/women/6.jpg"},
    {id: 7, name: "장원영", grade: 1, major: "컴퓨터공학", avatar: "https://randomuser.me/api/portraits/women/7.jpg"},
    {id: 8, name: "안유진", grade: 1, major: "체육학", avatar: "https://randomuser.me/api/portraits/women/8.jpg"},
    {id: 9, name: "이가율", grade: 2, major: "체육학", avatar: "https://randomuser.me/api/portraits/women/9.jpg"}
];

function AttendanceCard() {
    return(
        <div className="attendance-container">
            <h2 className="attendance-title">학생 출석부</h2>
            <div className="card-container">
                {students.map((student) => (
                    <div key={student.id} className="student-card">
                        <img src={student.avatar} alt={student.name} className="student-avatar" />
                        <div className="student-info">
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