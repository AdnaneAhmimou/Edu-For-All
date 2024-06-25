import React from 'react'
import PropTypes from 'prop-types'
import { CRow, CCol, CCard, CCardBody, CCardHeader, CCardTitle, CCardText, CCardImage } from '@coreui/react'

// Placeholder JSON data for courses
const courses = [
  {
    "id": 1,
    "subject": "Physics",
    "description": "Introduction to classical mechanics.",
    "level": "Beginner",
    "duration": 40
  },
  {
    "id": 2,
    "subject": "Chemistry",
    "description": "Basics of chemical reactions and equations.",
    "level": "Intermediate",
    "duration": 30
  },
  {
    "id": 3,
    "subject": "Biology",
    "description": "Fundamentals of cell biology.",
    "level": "Beginner",
    "duration": 45
  },
  {
    "id": 4,
    "subject": "Astronomy",
    "description": "Exploring the solar system.",
    "level": "Advanced",
    "duration": 60
  }
]

// CourseCard component
const CourseCard = ({ course }) => {
  return (
    <CCol sm={6} xl={4} xxl={3}>
      <CCard>
        <CCardHeader>
          <CCardImage orientation="top" src="https://placehold.co/600x400/EEE/31343C" alt={`${course.subject} image`} />
        </CCardHeader>
        <CCardBody>
          <CCardTitle>{course.subject}</CCardTitle>
          <CCardText>
            <strong>Description: </strong>{course.description}
          </CCardText>
          <CCardText>
            <strong>Level: </strong>{course.level}
          </CCardText>
          <CCardText>
            <strong>Duration: </strong>{course.duration} hours
          </CCardText>
        </CCardBody>
      </CCard>
    </CCol>
  )
}

CourseCard.propTypes = {
  course: PropTypes.shape({
    id: PropTypes.number.isRequired,
    subject: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    level: PropTypes.string.isRequired,
    duration: PropTypes.number.isRequired,
  }).isRequired,
}

// WidgetsBrand component
const WidgetsBrand = (props) => {
  return (
    <CRow className={props.className} xs={{ gutter: 4 }}>
      {courses.map(course => (
        <CourseCard key={course.id} course={course} />
      ))}
    </CRow>
  )
}

WidgetsBrand.propTypes = {
  className: PropTypes.string,
  withCharts: PropTypes.bool,
}

export default WidgetsBrand
