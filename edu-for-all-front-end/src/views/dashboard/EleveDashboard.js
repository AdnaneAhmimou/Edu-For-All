import React from 'react'
import classNames from 'classnames'

import {
  CAvatar,
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CProgress,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'


import WidgetsBrand from '../widgets/WidgetsBrand'

const EleveDashboard = () => {

  const progressGroupExample1 = [
    { title: 'Monday', value1: 34, value2: 78 },
    { title: 'Tuesday', value1: 56, value2: 94 },
    { title: 'Wednesday', value1: 12, value2: 67 },
    { title: 'Thursday', value1: 43, value2: 91 },
    { title: 'Friday', value1: 22, value2: 73 },
    { title: 'Saturday', value1: 53, value2: 82 },
    { title: 'Sunday', value1: 9, value2: 69 },
  ]

  const tableExample1 = [
    {
      "subject": "Mathematics",
      "teacher": "John Doe",
      "score": {
        value: 98,
        period: 'Jun 11, 2023 - Jul 10, 2023',
      },
      "last_activity": "2024-05-15"
    },
    {
      "subject": "Physics",
      "teacher": "Jane Smith",
      "score": {
        value: 70,
        period: 'Jun 11, 2023 - Jul 10, 2023',
      },
      "last_activity": "2024-05-16"
    },
    {
      "subject": "Chemistry",
      "teacher": "David Johnson",
      "score": {
        value: 20,
        period: 'Jun 11, 2023 - Jul 10, 2023',
      },
      "last_activity": "2024-05-14"
    },
    {
      "subject": "Biology",
      "teacher": "Sarah Williams",
      "score": {
        value: 50,
        period: 'Jun 11, 2023 - Jul 10, 2023',
      },
      "last_activity": "2024-05-17"
    }
  ]
  

 

  return (
    <>
     
      <WidgetsBrand className="mb-4"  />
      <CRow>
        <CCol xs>
          <CCard className="mb-4">
            <CCardHeader>Participation Rates</CCardHeader>
            <CCardBody>
              <CRow>
                <CCol xs={12} md={12} xl={12}>
             
                  {progressGroupExample1.map((item, index) => (
                    <div className="progress-group mb-4" key={index}>
                      <div className="progress-group-prepend">
                        <span className="text-body-secondary small">{item.title}</span>
                      </div>
                      <div className="progress-group-bars">
                        <CProgress thin color="info" value={item.value1} />
                        <CProgress thin color="danger" value={item.value2} />
                      </div>
                    </div>
                  ))}
                </CCol>
             
              </CRow>

              <br />

              <CTable align="middle" className="mb-0 border" hover responsive>
                <CTableHead className="text-nowrap">
                  <CTableRow>
             
                    <CTableHeaderCell className="bg-body-tertiary">Subject</CTableHeaderCell>
                    <CTableHeaderCell className="bg-body-tertiary ">Teacher</CTableHeaderCell>
                    <CTableHeaderCell className="bg-body-tertiary">Score</CTableHeaderCell>
               
                    <CTableHeaderCell className="bg-body-tertiary">Activity</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {tableExample1.map((item, index) => (
                    <CTableRow v-for="item in tableItems" key={index}>
          
                      <CTableDataCell>
                        {item.subject}
                      </CTableDataCell>
                      <CTableDataCell>
                        {item.teacher}
                      </CTableDataCell>
                      <CTableDataCell>
                        <div className="d-flex justify-content-between text-nowrap">
                          <div className="fw-semibold">{item.score.value}%</div>
                          <div className="ms-3">
                            <small className="text-body-secondary">{item.score.period}</small>
                          </div>
                        </div>
                        <CProgress thin color="success" value={item.score.value} />
                      </CTableDataCell>
                 
                      <CTableDataCell>
                        <div className="small text-body-secondary text-nowrap">Last Class</div>
                        <div className="fw-semibold text-nowrap">{item.last_activity}</div>
                      </CTableDataCell>
                    </CTableRow>
                  ))}
                </CTableBody>
              </CTable>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default EleveDashboard
