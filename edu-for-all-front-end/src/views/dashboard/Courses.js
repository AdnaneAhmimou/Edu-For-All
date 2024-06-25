import React, { useState } from 'react';
import classNames from 'classnames';
import Pagination from 'react-js-pagination';
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
} from '@coreui/react';
import WidgetsBrand from '../widgets/WidgetsBrand';

const Courses = () => {
  const [activePage, setActivePage] = useState(1);

  // Dummy data for demonstration purposes
  const coursesPerPage = 5;
  const totalCourses = 20;
  const totalPages = Math.ceil(totalCourses / coursesPerPage);
  const startIndex = (activePage - 1) * coursesPerPage;
  const endIndex = Math.min(startIndex + coursesPerPage, totalCourses);
  const courses = Array.from({ length: totalCourses }, (_, i) => ({
    id: i + 1,
    name: `Course ${i + 1}`,
  })).slice(startIndex, endIndex);

  const handlePageChange = (pageNumber) => {
    setActivePage(pageNumber);
  };

  return (
    <>
      <WidgetsBrand className="mb-4" />
      <CRow>
        <CCol className='d-flex justify-content-center'>
         
          <Pagination
            activePage={activePage}
            itemsCountPerPage={coursesPerPage}
            totalItemsCount={totalCourses}
            pageRangeDisplayed={5}
            onChange={handlePageChange}
            itemClass="page-item"
            linkClass="page-link"
          />
        </CCol>
      </CRow>
    </>
  );
};

export default Courses;
