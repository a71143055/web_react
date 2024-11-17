import React from 'react';
import './AttendanceCard.css'

const students = [
    {id: 1, name: "김철수", grade: 3, major: "컴퓨터공학", avatar: "https://randomuser.me/api/portraits/men/1.jpg"},
    {id: 2, name: "이영희", grade: 2, major: "경영학", avatar: "https://randomuser.me/api/portraits/women/2.jpg"},
    {id: 3, name: "박민수", grade: 4, major: "물리학", avatar: "https://randomuser.me/api/portraits/men/3.jpg"},
    {id: 4, name: "정지원", grade: 1, major: "화학", avatar: "https://randomuser.me/api/portraits/women/4.jpg"},
    {id: 5, name: "홍길동", grade: 3, major: "국문학", avatar: "https://randomuser.me/api/portraits/men/5.jpg"},
    {id: 6, name: "성춘향", grade: 2, major: "AISW", avatar: "https://randomuser.me/api/portraits/women/6.jpg"},
    {id: 7, name: "정원영", grade: 1, major: "컴퓨터공학", avatar: "https://randomuser.me/api/portraits/women/7.jpg"},
    {id: 8, name: "윤이나", grade: 1, major: "체육학", avatar: "https://randomuser.me/api/portraits/women/8.jpg"}
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