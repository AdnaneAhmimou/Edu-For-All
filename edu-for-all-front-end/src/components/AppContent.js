import React, { Suspense } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { CContainer, CSpinner } from '@coreui/react'

// routes config
import routes from '../routes'
import ProfessorDashboard from '../views/dashboard/ProfesssorDashboard'
import EleveDashboard from '../views/dashboard/EleveDashboard'
import Courses from '../views/dashboard/Courses'
import Schools from '../views/dashboard/Schools'

const AppContent = () => {
  return (
    <CContainer className="px-4" lg>
      <Suspense fallback={<CSpinner color="primary" />}>
        <Routes>
          {routes.map((route, idx) => {
            return (
              route.element && (
                <Route
                  key={idx}
                  path={route.path}
                  exact={route.exact}
                  name={route.name}
                  element={<route.element />}
                />
              )
            )
          })}
          <Route path="/" element={<Navigate to="dashboard" replace />} />
          <Route exact path="/student" name="Landing Page" element={<EleveDashboard  />} />
          <Route exact path="/professor" name="Landing Page" element={<ProfessorDashboard />} />
          <Route exact path="/courses" name="Landing Page" element={<Courses  />} />
          <Route exact path="/schools" name="Landing Page" element={<Schools />} />
        </Routes>
      </Suspense>
    </CContainer>
  )
}

export default React.memo(AppContent)
